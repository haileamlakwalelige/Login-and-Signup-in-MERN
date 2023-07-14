// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="flex bg-white items-center font-serif text-black">
    <div className="m-auto shadow-2xl w-4/12 h-4/6 mt-32 py-6 shadow-black rounded">
      <h1 className="font-bold font-serif text-4xl py-3 pl-3">Login</h1>
      <div className="pl-3 flex flex-col pt-2">
          <label className="font-bold">Full Name</label>
          <input type="email" placeholder="Enter Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="placeholder:pl-2 px-2 py-1 border-2 border-gray-500 mr-6" />
      </div>
      <div className="pl-3 flex flex-col">
          <label className="font-bold">Email</label>
          <input type="email" placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="placeholder:pl-2 px-2 py-1 border-2 border-gray-500 mr-6" />
      </div>
      <div className="pl-3 flex flex-col pt-2">
          <label className="font-bold">Password</label>
          <input type="email" placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="placeholder:pl-2 px-2 py-1 border-2 border-gray-500 mr-6" />
      </div>
      <div className="px-3 pr-6 py-3">
          <button className="bg-green-600 text-white py-1 px-2 text-center w-full">Register</button>
      </div>
      <h1 className="pl-3">Already have an account? </h1>
      <div className="px-3 pr-6 py-3">
      <Link to="/login">          <button className="text-black border-2 border-gray-600 font-bold py-1 px-2 text-center w-full">Sign In</button></Link>
      </div>
  </div>
  </div>
  )
}

export default Register;