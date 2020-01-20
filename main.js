"use strict";

var Axios = require("axios");
function uploadError(config) {
    var url = config.url,
        filename = config.filename,
        lineno = config.lineno,
        colno = config.colno,
        message = config.message,
        projectId = config.projectId,
        versionName = config.versionName;

    console.log("打包的时候使用");
    console.log(projectId);
    console.log(versionName);
    Axios.post(url, {
        filename: filename,
        lineno: lineno,
        colno: colno,
        message: message,
        projectId: projectId,
        versionName: versionName
    }).then(function (res) {
        console.log(res.data);
    });
}
module.exports = uploadError;
