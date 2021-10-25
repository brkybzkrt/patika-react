import axios from "axios"

export const getData =async(num)=>{

  await axios(`https://jsonplaceholder.typicode.com/users/${num}`).then(res=>{console.log(res.data)})

  await axios(`https://jsonplaceholder.typicode.com/posts?userId=${num}`).then(res=>{console.log(res.data)})

  
}