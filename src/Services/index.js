// export const getUserDetails=()=>{

// return new Promise((resolve,reject)=>{
//     resolve()
// })
// }

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8082',
    // timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });

  


  export const API_GET=(url)=>{


    return instance.get(url);


        // return new Promise((resolve,reject)=>{
        //     instance.get(url).then((res)=>resolve).catch((err)=>reject(err));

        // })
  }



  export const API_POST=(url,payload)=>{

    return instance.post(url,payload);

  }

  export const API_PUT=(url,payload)=>{
      
    return instance.put(url,payload);

  }

  export const API_DELETE=(url,payload)=>{
      
    return instance.delete(url,payload);

  }
