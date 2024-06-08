const { logData } = require("../utils");

function logReqRes (filename)  {
    return (req, res, next) => {
        const data = `Date - ${Date.now()} |  IP : ${req.ip} | Request Method : ${req.method} | Req Path - ${req.path}\n`;
        logData(filename, data);
        next();
    }
}


module.exports = {
    logReqRes
}