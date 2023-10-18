## [petal-service](https://github.com/xiangwenhu/petal-service) 的demo项目

## 本地测试流程
1. ```npm  install```
2. VSCode 安装 Code Runner 插件
3. 全局安装 `npm install ts-node typescript -g`
4. 进入指定文件， 右键 `Run Code`   
   
或者   
1. ```npm  install```
2. 在 `test/index.ts` 引入需要测试的示例
3. ```npm run test```



## 示例清单
* [BaseService + 日志开关](./test/baseService.ts)
* [自定义装饰器](./test/createDecorator.ts)
* [创建新实例createInstance](./test//createInstance.ts)
* [全局默认实例方法 + 自定义request + 拦截器](./test/global-customRequest.ts)
* [全局默认实例方法](./test/global.ts)
* [getter](./test/getter.ts)
* [静态getter](./test/getter-static.ts)
* [继承](./test/inherit.ts)
* [class config属性作为配置](./test/instanceConfig.ts)
* [path路径参数](./test/pathUrl.ts)
* [静态方法和静态属性配置](./test/static.ts)
* [静态属性config作为配置](./test/staticConfig.ts)
* [accessor](./test/accessor.ts)
* [静态accessor](./test/accessor-static.ts)
* [查询方法的config](./test/getMethodConfig.ts)
* [方法统计]("./test/staticConfig.ts)
* [使用全局暴露的实例方法执行方法统计]("./test/global-statistics.ts")
* [装饰非异步方法](./test/noPromiseMethod.ts.ts)
