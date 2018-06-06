# Fake JSON generator
> Fake JSON generator for playing with nodeJs fs module, testing redis cache,for creating fake REST API etc.



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



### Output 

[
    { "_id": 828181167, 
    "title": "Sir", 
    "firstName": "Richelle", 
    "lastName": "Charley",
    "favouriteColor": "lightseagreen", 
    "about": "finibus maecenas dignissim vel blandit placerat sed tempor ex faucibus ...",
    "address": { 
        "street": "Pitman Street",
        "city": "Manchester",
        "country": "Bermuda", 
        "countryCode": "BM"
     },
    "company": "LoopSys",
    "contactDetails": { 
        "phone": "(488)-(869)-(240)",
        "email": "Richelle.Charley@LoopSys.com"
     } 
    },
    ...
    ,
    ...
]






```
