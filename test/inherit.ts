import {
    classDecorator, methodDecorator, setConfig, paramsDecorator, fieldDecorator,
    ApiResponse, RequestConfig, enableLog
} from "petal-service";

enableLog();
setConfig({
    headers: {
        token: "token",
    },
});

@classDecorator({
    baseURL: "https://www.jd.com",
})
class DemoService<R = any> {
    protected res!: ApiResponse<R>;

    @methodDecorator({
        method: "get",
        url: "",
    })
    public async getIndex(
        this: DemoService,
        _config: RequestConfig
    ) {
        return this.res.data;
    }

    @fieldDecorator("timeout")
    timeoutValue = 5000;

    @fieldDecorator("baseURL")
    baseURLValue = "https://www.github.com"
}

@classDecorator({
    baseURL: "https://cn.bing.com/",
})
class SubDemoService extends DemoService {
    @methodDecorator({
        method: "get",
        url: "",
    })
    @paramsDecorator({
        hasParams: true,
    })
    async getBingIndex<R = string>(
        this: SubDemoService,
        _params: any,
        _config: RequestConfig
    ): Promise<string> {
        return this.res!.data;
    }
    @fieldDecorator("timeout")
    timeoutValue = 30 * 1000;
}


const serviceA = new DemoService();
serviceA
    .getIndex(
        {
            headers: { userId: 1 },
        }
    )
    .then((res) => {
        console.log("res serviceA getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error serviceA getIndex:", err);
    });

const subService = new SubDemoService();
subService
    .getBingIndex(
        { since: "monthly" },
        {
            headers: { a: 1 },
        }
    )
    .then((res) => {
        console.log("res subService getBingIndex:", res.length);
    })
    .catch((err) => {
        console.log("res subService getBingIndex error:", err);
    });

subService
    .getIndex(
        {
            headers: { a: 1 },
        }
    )
    .then((res) => {
        console.log("res subService getIndex :", res.length);
    })
    .catch((err) => {
        console.log("res subService getIndex  error:", err);
    });
