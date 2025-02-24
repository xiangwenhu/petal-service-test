import { RequestConfig, BaseService, classDecorator, methodDecorator, setConfig, fieldDecorator, enableLog, RequestParams, } from "petal-service";

// 允许打印日志
enableLog(true);


// 设置baseUrl和超时时间
@classDecorator({
    baseURL: "http://www.example.com"
})
class DemoService<R> extends BaseService<R>{

    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @methodDecorator({
        method: "get",
        url: "",
    })
    static getIndex(
        this: DemoService<any>,
        _params: PetalParamsPick.Params<{
            since: string
        }>
    ): Promise<string> {
       
        return this.res.data
    }

}

// DemoService.getIndex 本身不是异步方法，内部会包裹成为异步方法
DemoService
    .getIndex(
        {
            params: { since: "monthly" },
            config: {
                headers: { userId: 1 },
            }
        },
    )
    .then((res: any) => {
        console.log("res DemoService static getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error DemoService static getIndex:", err);
    });
