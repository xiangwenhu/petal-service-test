import {
    enableLog,
    methodDecorator,
} from "petal-service";

enableLog(true);

class DemoService<R = any> {
    private config: PetalRequestConfig = {
        timeout: 90 * 1000,
        baseURL: "http://www.example.com",
    };

    protected res!: PetalApiResponse<R>;
    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @methodDecorator({
        method: "get",
        url: "",
    })
    public async getIndex(
        this: DemoService<string>,
        _params: Pick<PetalRequestParams<any, { since: string }>, "config" | "params">
    ) {
        // 不写任何返回， 默认会返回 this.res.data
        // return this.res!.data
    }
}

const serviceA = new DemoService();
serviceA
    .getIndex(
        {
            params: { since: "monthly" },
            config: {
                headers: { userId: 1 },
            }
        }
    )
    .then((res: any) => {
        console.log("res serviceA getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error serviceA getIndex:", err);
    });
