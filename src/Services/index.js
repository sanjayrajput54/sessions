// export const getUserDetails=()=>{

// return new Promise((resolve,reject)=>{
//     resolve()
// })
// }

import axios from 'axios';
import {getToken} from './../Store';

const instance = axios.create({
    baseURL: 'http://localhost:8082',
    // timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });

  instance.defaults.headers['Content-Type']='application/json';

  


  export const API_GET=(url)=>{

    return getToken().then((token)=>{
      if(token){
        instance.defaults.headers["token"]=token;
      }
      return instance.get(url);
    });



        // return new Promise((resolve,reject)=>{
        //     instance.get(url).then((res)=>resolve).catch((err)=>reject(err));

        // })
  }



  export const API_POST=(url,payload)=>{

    return getToken().then((token)=>{
      if(token){
        instance.defaults.headers["token"]=token;
      }
    return instance.post(url,payload);
    })

  }

  export const API_PUT=(url,payload)=>{
      
    return getToken().then((token)=>{
      if(token){
        instance.defaults.headers["token"]=token;
      }
    return instance.put(url,payload);
    })

  }

  export const API_DELETE=(url,payload)=>{
    return getToken().then((token)=>{
      if(token){
        instance.defaults.headers["token"]=token;
      }
    return instance.delete(url,payload);
    });

  }
