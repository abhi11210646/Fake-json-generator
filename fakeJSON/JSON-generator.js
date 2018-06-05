const Person = require("./person-model");
const fs = require("fs");
module.exports = (path, repeat) => {
    fs.truncateSync(path, 0);
    let content = [];
    for (let i = 0; i < repeat; i++) {
        content.push(new Person());
    }
    fs.appendFileSync(path, JSON.stringify(content));
}

