import React from "react";

function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col border-2 border-black p-10 rounded-lg">
        <h1 className="text-5xl font-semibold ">Login</h1>
        <p className="my-5">Enter your Details Below</p>
        <input className="border-[1px] border-gray-800 outline-none text-1xl p-2 m-1 rounded-md" type="email" name="email" id="email" placeholder="Email" />
        <input className="border-[1px] border-gray-800 outline-none text-1xl p-2 m-1 rounded-md" type="password" name="pass" id="pass" placeholder="Password" />
        <button className="bg-red-600 mt- m-3 text-white rounded-lg py-3">Login</button>
      </div>
    </div>
  );
}

export default SignIn;
