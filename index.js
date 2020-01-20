const Axios=require("axios");
function uploadError(config){
    const {url,filename,lineno,colno,message,projectId,versionName}=config;
    console.log("打包的时候使用");
    console.log(projectId);
    console.log(versionName);
    Axios.post(url,
    {
        filename:filename,
        lineno:lineno,
        colno:colno,
        message:message,
        projectId:projectId,
        versionName:versionName
    })
    .then(res=>{
        console.log(res.data);
    })
       
}
module.exports=uploadError;