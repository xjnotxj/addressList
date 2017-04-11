var express = require('express');
var router = express.Router();

var fs = require("fs");

var FS_PATH_SERVICES = './routes/services';
var REQUIRE_PATH_SERVICES = './services/';

fs.readdir(FS_PATH_SERVICES, function (err, files) {
    if (err) {
        throw "没有找到 " + FS_PATH_SERVICES + " 文件夹";
    }
    for (var e; files.length && (e = files.shift());
    ) {
        var service = require(REQUIRE_PATH_SERVICES + e);
        service.init && service.init(router);
    }
});


module.exports = router;
