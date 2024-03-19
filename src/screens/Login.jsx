import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    <div className="flex flex-col border-2 p-10 border-red-700">
      <h1 className="text-5xl font-semibold ">Login</h1>
      <p className="my-5">Enter your details</p>

      <input type="email" placeholder="Email" className="mt-2 bg-[whitesmoke]"/>

      <input type="password" placeholder="Password" />

      <button className='bg-black my-2 text-white rounded-lg py-2'>Login</button>
    
    </div>
    </div>
  
  );
}

export default Login;
