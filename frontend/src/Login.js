import axios from "axios"
import { useState } from "react"
let Login=()=>{
    let [data,setData]=useState({"_id":"","password":""})
    let update=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let loginapp=async()=>{
  
        let res=await axios.post("http://localhost:5000/login",data)
      console.log(res.data)
      if(res.data.token==undefined)
      {
        console.log("login fail")
      }
      else{
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("uid",res.data.uid)
        localStorage.setItem("isLogin",true)
        if(res.data.role==101)
        {
            localStorage.setItem("isAdmin",true)

        }
        else{
            localStorage.setItem("isAdmin",false)
        }
      }
    }
    return(<div>
        <input type="text" name="_id" onChange={(e)=>update(e)} placeholder="eneter id"/>
        <input type="password" name="password"  onChange={(e)=>update(e)} placeholder="enter password"/>
        <button onClick={loginapp}>Login</button>
    </div>)
}
export default Login