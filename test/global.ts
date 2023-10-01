
import "petal-service";
import { RequestConfig } from "petal-service";
import axios from "axios";

// 自定义 request
const instance = axios.create();
instance.interceptors.request.use(config=>{
    console.log("instance.interceptors.request config.baseUrl",  config.baseURL);
    return config;
})

setPetalRequestInstance(instance);


// 更新配置，比如授权信息，例如jwt, cookies
setPetalConfig({
    headers: {
        token: "token",
    },
});

// 设置baseUrl和超时时间
@petalClassDecorator({
    timeout: 60 * 1000,
    baseURL: "http://www.example.com"
})
class DemoService<R> extends BasePetalService<R>{

    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @petalMethodDecorator({
        method: "get",
        url: "",
    })
    static async getIndex(
        this: DemoService<string>,
        _params: any,
        _config: RequestConfig,
    ){
        // 不写任何返回， 默认会返回 this.res.data
        return this.res.data
    }

    // 设置 实例的timeout ，优先级: 方法 > 大于实例 > class > 自定义默认值
    @petalFieldDecorator("timeout")
    static timeoutValue = 5 * 1000;
}

DemoService
    .getIndex(
        { since: "monthly" },
        {
            headers: { userId: 1 },
        },
    )
    .then((res: any) => {
        console.log("res DemoService static getIndex:", res.length);
    })
    .catch((err) => {
        console.log("error DemoService static getIndex:", err);
    });
