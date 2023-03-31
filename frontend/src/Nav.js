import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import './Nav.css'

let Nav=()=>{
    let [issLogin,setLogin]=useState(localStorage.getItem("isLogin"))
    let [issAdmin,setAdmin]=useState(false)
    useEffect(()=>{
        let isLogin=localStorage.getItem("isLogin")
        let isAdmin=localStorage.getItem("isAdmin")
        if(isLogin==undefined)
        {
            setLogin(false)
        }
        else{
            setLogin(true)
            if(isAdmin=='true')
            {
                setAdmin(true)
            }
        }
        console.log(issLogin)
    },[])
    return(<div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/listusers">ListUsers</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/addprod">Addproducts</Link>
        

    </div>)
}
export default Nav