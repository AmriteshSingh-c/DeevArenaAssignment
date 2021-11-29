/* eslint-disable no-template-curly-in-string */
import React,{useEffect,useState} from "react";
import {Link,useLocation} from "react-router-dom";
import "./Header.css";
const Header=()=>{
    const [activeTab,setActiveTab]=useState("Home");
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Home");
        }else if(location.pathname === "/add"){
            setActiveTab("AddUser");
        }
    },[location.pathname]);
    return(
        <div className="header">
            <p className="logo">User Management</p>
            <div className="header-right">
                <Link to="/">
                   
                    <p className={{activeTab}==="AddUser"?"active":""} onClick={()=> setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
                <Link to="/add">
                    <p className={{activeTab}==="AddUser"?"active":""} onClick={()=> setActiveTab("AddUser")}>
                        AddUser
                    </p>
                </Link>
            </div>

        </div>
    )
}

export default Header;