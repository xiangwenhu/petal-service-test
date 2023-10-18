import "petal-service";

petalEnableLog();

class DemoService<R = any> extends PetalBaseService<R>{

    @petalMethodDecorator({
        url: "https://baidu.com/"
    })
    static async getIndex(): Promise<string> {
        return this.res.data;
    }

     @petalAccessorDecorator("timeout")
     static accessor timeout: number = 20 * 1000;

}


DemoService.getIndex().then(res => {
    console.log("res:", res.length);
}).catch(err => {
    console.log("err:", err);
})
