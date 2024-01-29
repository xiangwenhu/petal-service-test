import "petal-service";

// 允许打印日志
petalEnableLog(true);

// 更新配置，比如授权信息，例如jwt, cookies
petalSetConfig({
    headers: {
        token: "token",
    },
});

// 设置baseUrl和超时时间
@petalClassDecorator({
    timeout: 30 * 1000,
    baseURL: "http://www.jd.com",
})
@petalClassDecorator({
    timeout: 60 * 1000,
    baseURL: "http://www.example.com",
})
class DemoService<R = any> extends PetalBaseService<R> {
    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @petalMethodDecorator({
        method: "post",
        url: "",
    })
    static async getIndex(
        this: DemoService<string>,
        _params: PetalParamsPick.Params<{ since: string }>,
    ) {
        // 不写任何返回， 默认会返回 this.res.data
        return this.res.data;
    }

    // 设置 实例的timeout ，优先级: 方法 > 大于实例 > class > 自定义默认值
    @petalFieldDecorator("timeout")
    static timeoutValue = 5 * 1000;
}

DemoService.getIndex(
    {
        params: { since: "monthly" },
        config: {
            headers: { userId: 1 },
        },
    }
)
    .then((res) => {
        console.log("res DemoService static getIndex:", res);
    })
    .catch((err) => {
        console.log("error DemoService static getIndex:", err);
    });
