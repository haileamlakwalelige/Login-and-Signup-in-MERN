/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Login=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login", {email, password})
        .then(()=> navigate("/"))
        .catch(err => console.log(err))
    }
    return(
        <div className="flex bg-white items-center font-serif text-black">
          <form onSubmit={handleSubmit} className="m-auto shadow-2xl w-4/12 h-4/6 mt-32 py-6 shadow-black rounded">
            <h1 className="font-bold font-serif text-4xl py-3 pl-3">Login</h1>
            <div className="pl-3 flex flex-col">
                <label className="font-bold">Email</label>
                <input type="email" placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="placeholder:pl-2 px-2 py-1 border-2 border-gray-500 mr-6" />
            </div>
            <div className="pl-3 flex flex-col pt-2">
                <label className="font-bold">Password</label>
                <input type="password" placeholder="Enter Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="placeholder:pl-2 px-2 py-1 border-2 border-gray-500 mr-6" />
            </div>
            <div className="px-3 pr-6 py-3">
                <button className="hover:bg-blue-500 hover:rounded-3xl bg-green-600 text-white py-1 px-2 text-center w-full">Login</button>
            </div>
            <h1 className="pl-3">Don't have an account? </h1>
            <div className="px-3 pr-6 py-3">
                <Link to="/register"><button className="text-black hover:border-none hover:text-white hover:rounded-3xl hover:bg-orange-500 border-2 border-gray-600 font-bold py-1 px-2 text-center w-full">Sign Up</button></Link>
            </div>
        </form>
        </div>
    )
}

export default Login;