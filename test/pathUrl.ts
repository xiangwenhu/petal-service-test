import {
    classDecorator,
    methodDecorator,
    ApiResponse, RequestConfig, RequestParams
} from "petal-service";

// 设置baseUrl和超时时间
@classDecorator({
    baseURL: "https://juejin.cn",
    timeout: 60 * 1000
})
class DemoService<R = any> {
    protected res!: ApiResponse<R>;

    // 设置 api 请求参数，最主要的是url, params, data和额外的config
    @methodDecorator({
        method: "get",
        url: "/course/:type",
    })

    public async getIndex(
        this: DemoService<string>,
        _params: Pick<RequestParams, "config" | "path">
    ) {
        // 不写任何返回， 默认会返回 this.res.data
        // return this.res!.data
        return this.res.data
    }
}

const serviceA = new DemoService();
serviceA
    .getIndex(
        {
            path: {
                type: 'frontend'
            },
            config: {
                headers: { userId: 1 },
            }
        },
    )
    .then((res) => {
        console.log("res serviceA getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error serviceA getIndex:", err);
    });
