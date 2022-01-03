const fs = require('fs')
const csv2json = require('./index')
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