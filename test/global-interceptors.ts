import "petal-service";

const requestor = petalGetRequester();

requestor.interceptors.request.use((config) => {
    console.log(
        "instance.interceptors.request config",
        config
    );
    return config;
});

petalEnableLog(false);
// 设置baseUrl和超时时间
@petalClassDecorator({
    timeout: 60 * 1000,
    baseURL: "https://www.example.com",
})
class DemoService<R> extends PetalBaseService<R> {
    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @petalMethodDecorator({
        method: "get",
        url: "",
    })
    static async getIndex(this: DemoService<string>, _params: PetalParamsPick.Native) {
       
        return this.res.data;
    }
}

DemoService.getIndex({
    config: { headers: { userId: 1 } },
})
    .then((res: any) => {
        console.log("res DemoService static getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error DemoService static getIndex:", err);
    });
