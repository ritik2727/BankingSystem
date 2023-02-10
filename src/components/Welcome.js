import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db,auth } from "../firebase";
export default function Welcome() {
    let location = useLocation();
var user = auth.currentUser;
console.log(user)
const [name,setName] = useState(user.displayName);

const [email,setEmail] = useState(user.email);
    return (
     
        <div><h1>Welcome {user.displayName}</h1></div>
    );
}