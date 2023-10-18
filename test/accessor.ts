import  "petal-service";

petalEnableLog();

class DemoService<R = any> extends PetalBaseService<R>{

    @petalMethodDecorator({
        url: "https://baidu.com"
    })
    async getIndex(this: DemoService<string>): Promise<string> {
        return this.res.data;
    }

    @petalAccessorDecorator()
     accessor timeout: number = 15 * 1000;

}


const service = new DemoService();
service.getIndex().then(res => {
    console.log("res:", res.length);
}).catch(err => {
    console.log("err:", err);
})
