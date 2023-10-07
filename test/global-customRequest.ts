
import "petal-service";
import { RequestConfig } from "petal-service";
import axios from "axios";

// 自定义 request
const instance = axios.create();
instance.interceptors.request.use(config=>{
    console.log("instance.interceptors.request config.baseUrl",  config.baseURL);
    return config;
})
petalSetRequestInstance(instance);


// 设置baseUrl和超时时间
@petalClassDecorator({
    timeout: 60 * 1000,
    baseURL: "https://www.example.com"
})
class DemoService<R> extends PetalBaseService<R>{

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

