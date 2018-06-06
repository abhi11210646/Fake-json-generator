// const { fakeJSONSync, fakeJSON } = require("fakeJSON"); //for user
const { fakeJSONSync, fakeJSON } = require("./../JSON-generator"); //for internal use

fakeJSON(`${__dirname}/fake-JSON.json`, 200)
    .then((res) => console.log('RESPONSE', res))
    .catch(err => console.log('ERROR', err));

const ss = fakeJSONSync(`${__dirname}/fake-JSON.json`, 1);

console.log(ss);