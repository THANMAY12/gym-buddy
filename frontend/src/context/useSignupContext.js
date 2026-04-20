import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";



export const useSignup=()=>{
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const{dispatch}=useAuthContext()
    const signup=async(email,password)=>{
        setIsLoading(true);
        setError(null)
        const response =await fetch(`${process.env.REACT_APP_API_URL}/api/user/signup`, {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const jsonres=await response.json();
        if(!response.ok){
            setIsLoading(false)
            setError(jsonres.error)
        }
        else{
            // save the user to local storage
            localStorage.setItem('user',JSON.stringify(jsonres))
            //update global auth context
            dispatch({type:'LOGIN',payload:jsonres})
            setIsLoading(false)
        }
    }
    return {signup,isLoading,error}
}