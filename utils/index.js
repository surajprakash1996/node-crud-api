const fs =  require("fs");

function logData (filename, data) {
    fs.appendFile(filename, data, (err) => {
        if( err ) {
            console.log(err);
            return
        }
    })
}

module.exports = {
    logData
}