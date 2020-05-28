export const setToken=(token)=>{
    return new Promise((resolve,reject)=>{

        if(token){
            sessionStorage.setItem("token",token);
            resolve(true);
        }else{
            reject(false);
        }  
        
        })
}

export const getToken=()=>{
    return new Promise((resolve,reject)=>{
        const token= sessionStorage.getItem("token");
        // if(token){
        // resolve(token);
        // }
        resolve(token || null);

        
        // else{
        //     reject(false);
        // }  
        })
}


// ExtensionScriptApis.then().catch()



// const test=()=>{

//     setTimeout(()=>{
//         return {Name:"Abc"};
//     },500)

//     return {Name:""};
// }


