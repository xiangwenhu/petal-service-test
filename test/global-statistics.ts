import "petal-service";

class DemoService<R = any> extends PetalBaseService<R>{

    @petalMethodDecorator({
        url: "https://baidu.com/"
    })
    static async getStaticIndex(): Promise<string> {
        return this.res.data;
    }

    @petalMethodDecorator({
        url: "https://baidu.com/"
    })
    getIndex(){
        return this.res.data
    }

}

const ins = new DemoService();

const result = petalGetStatistics(ins);
console.log(JSON.stringify(result, undefined , "\t"));