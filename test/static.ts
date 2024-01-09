import { ApiResponse, RequestConfig, RequestParams, createInstance } from "petal-service";

const {
    classDecorator, methodDecorator, fieldDecorator
} = createInstance({
    defaults: {
        baseURL: "https://juejin.cn"
    }
});

// 设置baseUrl和超时时间
@classDecorator({
    timeout: 60 * 1000
})
class DemoService {

    static res: ApiResponse;

    @methodDecorator({
        method: "get",
        url: "/course/:type",
    })
    static async getCourse(
        this: typeof DemoService,
        _params: Pick<RequestParams, "path" | "config">
    ) {
        // 不写任何返回， 默认会返回 this.res.data
        // return this.res!.data
        return this.res.data;
    }

    @fieldDecorator("timeout")
    static timeoutValue = 5000;
}

DemoService
    .getCourse(
        {
            path: {
                type: "frontend"
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
