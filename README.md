# csv2json
A npm package that coverts your csv file to a json file

## Install the package

```sh
npm i @tush-tr/csv2json
```

## How to use
```sh
const csv2json = require("@tush-tr/csv2json")
```


## Converting csv to json

```js
const fs = require('fs')
const csv2json = require("@tush-tr/csv2json")
const {parse} = require('csv-parse')
function readFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path, function (err, fileData) {
            parse(fileData, {columns: false, trim: true}, async function(err, rows) {
                if(err){
                    reject(err)
                }
                resolve(rows)
            })
          })
    })
}

async function main(){
    const csvData = await readFile("test.csv");
    const jsonData = JSON.stringify(csv2json(csvData))
    console.log(jsonData)
}
main()
```


# Maintainer 😎

[Tushar Rajpoot](https://twitter.com/tush_tr604)
