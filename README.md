# Fake JSON generator
> Fake JSON generator for playing with nodeJs fs module, testing redis cache,for creating fake REST API



## Installation

```
$ npm i fake-json-generator

```

## Usage

**Note**  Keep json file in the same directory. And provide full path for JSON file.

It exposes synchronous and asynchronous methods.

```js

/**

fakeJSON expect 2 argument first one is path and second one is number of JSON Object.

e.g. fakeJSON(path, No_Of_JSON_obj);

**/

const { fakeJSONSync, fakeJSON } = require("fake-json-generator"); 

// Asynchronous
fakeJSON(`${__dirname}/fake-JSON.json`, 200)
    .then((res) => console.log('RESPONSE', res))
    .catch(err => console.log('ERROR', err));
    
    
// Synchronous
const ss = fakeJSONSync(`${__dirname}/fake-JSON.json`, 100);


```
