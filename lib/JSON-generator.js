const Person = require("./person-model");
const fs = require("fs");
const fakeJSONSync = (path, repeat) => {
    fs.truncateSync(path, 0);
    let content = [];
    for (let i = 0; i < repeat; i++) {
        content.push(new Person());
    }
    fs.appendFileSync(path, JSON.stringify(content));
    return "SUCCESS";
};
const fakeJSON = (path, repeat) => {
    return new Promise((resolve, reject) => {
        fs.truncate(path, (err) => {
            if (err) return reject(err);
            let content = [];
            for (let i = 0; i < repeat; i++) {
                content.push(new Person());
            }
            fs.appendFile(path, JSON.stringify(content), (err) => {
                if (err) return reject(err);
                resolve("SUCCESS");
            });
        });
    });

};
module.exports = { fakeJSON, fakeJSONSync };

