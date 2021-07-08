const fs = require("fs");
module.exports.save = (filename , json) =>{
    return fs.writeFileSync(filename,JSON.stringify(json))
}

module.exports.load =  (filename) => {
    return JSON.parse(fs.readFileSync(filename)) ? JSON.parse(fs.readFileSync(filename).toString())  : 'null'
}