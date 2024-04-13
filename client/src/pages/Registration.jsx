import React, { useState } from "react";

const Registration = () => {
  const [input, setInput] = useState({});
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  const formHandler=async(e)=>{
    e.preventDefault()
    const res = await fetch('/api/auth/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(input)
    })
    const data = await res.json()
  }
  console.log(input);
  return (
    <div className="flex flex-col">
      <form onSubmit={formHandler} className="flex flex-col">
        <input
          onChange={inputHandler}
          type="text"
          name=""
          id="name"
          placeholder="Username"
        />
        <input
          onChange={inputHandler}
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          onChange={inputHandler}
          type="password"
          name=""
          id="Password"
          placeholder="Password"
        />
        <button>Register/Signup</button>
      </form>
    </div>
  );
};

export default Registration;
