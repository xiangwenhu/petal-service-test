import {
    ApiResponse, RequestConfig,
    enableLog,
    methodDecorator,
    paramsDecorator
} from "petal-service";

enableLog(true);

class DemoService<R = any> {
    private config: RequestConfig = {
        timeout: 90 * 1000,
        baseURL: "http://www.example.com",
    };

    protected res!: ApiResponse<R>;
    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @methodDecorator({
        method: "get",
        url: "",
    })
    @paramsDecorator({
        hasParams: true
    })
    public async getIndex(
        this: DemoService<string>,
        params: any,
        config: RequestConfig
    ) {
        // 不写任何返回， 默认会返回 this.res.data
        // return this.res!.data
    }
}

const serviceA = new DemoService();
serviceA
    .getIndex(
        { since: "monthly" },
        {
            headers: { userId: 1 },
        }
    )
    .then((res: any) => {
        console.log("res serviceA getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error serviceA getIndex:", err);
    });
