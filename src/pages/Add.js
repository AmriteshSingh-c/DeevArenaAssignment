import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import "./Add.css";
import fireDb from "../firebase.js";
import {toast} from "react-toastify";

const initialState={
    name:"",
    email:"",
    contact:""
}
const Add=()=>{
    const [state,setState]=useState(initialState);
    const [data,setData]=useState({});
    const {name,email,contact}=state;
    const navigate=useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        fireDb.child("user").on("value",(snapshot)=>{
            if(snapshot.val()!=null){
                setData({...snapshot.val()});
            }else{
                setData({});
            }
        });
        return ()=>{
            setData();
        };
    },[id]);

    useEffect(()=>{
        if(id){
            setState({...data[id]});
        }else{
            setState({...initialState});
        }
        return()=>{
            setState({...initialState});
        }
    },[id,data]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name||!email||!contact){
            toast.error("Please fill All the required Fields");
        }else{
            if(!id){
                fireDb.child("user").push(state,(err)=>{
                    if(err){
                        toast.error(err);
                    }else{
                        toast.success("User Added Successfully");
                    }
                });
            }else{
                fireDb.child(`user/${id}`).set(state,(err)=>{
                    if(err){
                        toast.error(err);
                    }else{
                        toast.success("User Updated Successfully");
                    }
                });
            }
            
            setTimeout(()=>navigate("/"),500);
        }
    };
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setState({
            ...state,
            [name]:value
        })
    };
    return(
        <div style={{marginTop:"100px"}}>
            <form style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}}
            onSubmit={handleSubmit}>
                <label htmlFor="name">
                Name
                </label>
                <input 
                type="text"
                id="name"
                name="name"
                placeHolder="Your Name"
                value={name||""}
                onChange={handleInputChange}></input>
                <label htmlFor="name">
                Email
                </label>
                <input 
                type="text"
                id="email"
                name="email"
                placeHolder="Your Email"
                value={email||""}
                onChange={handleInputChange}></input>
                <label htmlFor="contact">
                contact
                </label>
                <input 
                type="text"
                id="contact"
                name="contact"
                placeHolder="Your Contact No."
                value={contact||""}
                onChange={handleInputChange}></input>
                <input type="submit" value={id ? "Update":"Save"}></input>
            </form>
            
        </div>
    );
};
export default Add;