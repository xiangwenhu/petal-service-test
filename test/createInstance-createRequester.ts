import "petal-service"
import axios from "axios";

const { classDecorator, methodDecorator } = petalCreateInstance({
    createRequester(){
        const instance =  axios.create({
            timeout: 30 * 1000
        });

        instance.interceptors.request.use((config)=> {
            console.log("requester.interceptors.request");
            return config;
        })


        return instance;
    }
})


// 设置baseUrl和超时时间
@classDecorator({
    timeout: 60 * 1000,
    baseURL: "https://www.baidu.com",
})
class DemoService<R> extends PetalBaseService<R> {
    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @methodDecorator({
        method: "get",
        url: "",
    })
    static async getIndex(this: DemoService<string>, _params: PetalParamsPick.Native) {
        // 不写任何返回， 默认会返回 this.res.data
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
