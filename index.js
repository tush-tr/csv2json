function createTemplate(keys,inputs){
    let obj = {};
    keys.forEach((key,i)=>{
        obj[key]=inputs[i]
    })
    return obj;
}
function csv2json(csvInputs){
    const em = [];
    const keynames = csvInputs[0];
    csvInputs.forEach((row)=>{
        em.push(createTemplate(keynames,row))
    })
    return em;
}
module.exports = csv2json