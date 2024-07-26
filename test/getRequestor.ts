import "petal-service";

const request = petalGetRequester();


request({
    url: "https://example.com"
}).then(res=>{
    console.log("res", res.data)
})