import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col border-2 border-black p-10 rounded-lg">
        <h1 className="text-5xl font-semibold ">Register</h1>
        <p className="my-5">Enter your Details Below</p>
        <input className="border-b-2 border-gray-800 outline-none text-1xl p-2 m-1 focus:border-b-slate-800" type="text" name="name" id="name" placeholder="Name" />
        <input className="border-b-2 border-gray-800 outline-none text-1xl p-2 m-1 focus:border-b-slate-800" type="email" name="email" id="email" placeholder="Email" />
        <input className="border-b-2 border-gray-800 outline-none text-1xl p-2 m-1 focus:border-b-slate-800" type="password" name="pass" id="pass" placeholder="Password" />
        <button className="bg-red-600 mt- m-3 text-white rounded-lg py-3">Create Account</button>
      </div>
    </div>
  )
}

export default Register
