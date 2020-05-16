export const validator=(schema,values)=>{

let returnItems={};

if(schema && values){

for(let field in schema){
if(schema[field].type==='string' && !schema[field].regex.test(values[field])){
    returnItems[field]=schema[field].message;
}
}
}
console.log("returnItems",returnItems);
return returnItems
}