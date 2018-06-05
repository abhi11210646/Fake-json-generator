// const { fakeJSONSync, fakeJSON } = require("./fakeJSON"); //for user
const { fakeJSONSync, fakeJSON } = require("./JSON-generator"); //for internal use
let ss = fakeJSON("./fake-JSON.json", 200)
    .then((res) => console.log('RESPONSE', res))
    .catch(err => console.log('ERROR', err));

ss = fakeJSONSync("./fake-JSON.json", 200);