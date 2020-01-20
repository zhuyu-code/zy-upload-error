# 上传错误插件
## 使用方法
1. `npm i zy-upload-error`
2. `const uploadError=require("zy-upload-error")`
3. uploadError方法必须传入指定的参数，否则失效
4. 例子：
``` uploadError({
        productName:"云屏",
        projectName:"项目2",
        versionName:"2.0.4",
        url:"http://127.0.0.1:7002/handlemap",
        filename:path.basename(data.filename),
        lineno:data.lineno,
        colno:data.colno,
        message:data.message
    });
```
5.参数意义
* url:服务器处理错误信息的接口
* filename:错误的文件名信息
* lineno:错误的行行号
* colno:错误的列号
* message:错误信息
* productName:产品名称
* projectName:项目名称
* versionName:版本名称