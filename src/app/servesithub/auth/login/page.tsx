"use client"
import React from 'react'
import {useForm} from "react-hook-form"
import {redirect,usePathname} from "next/navigation";

type LoginForm={
  email:String,
  password:String
  
}
function Login() {
  const { register, handleSubmit, reset }= useForm<LoginForm>()
  const pathname = usePathname();
  const login = (user:LoginForm)=>{
    console.log(user);
    reset()
  }
  if(pathname.includes('/login')){
    redirect('/')
  }
  return (
    <div className="lg:container w-full bg-gray-100 flex justify-center items-center lg:p-5 p-2">
      <form
        className="lg:w-2/5 md:w-4/5 w-full flex flex-col gap-2 items-center justify-center  shadow-md rounded pt-5 pb-3 bg-gradient-to-tr from-gray-100 from-70% to-yellow-300"
        onSubmit={handleSubmit(login)}
      >
        <h1 className="text-blue-700 font-bold text-lg text-center">
          Login to Serve IT Hub for more
        </h1>
        <div className="w-full flex flex-col gap-2 pl-3">
          <label htmlFor="name" className="pl-3 text-blue-700 font-bold">
            Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 "
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="w-full flex flex-col gap-2 pl-3">
          <label htmlFor="items" className="pl-3 text-blue-700 font-bold ">
            Message
          </label>
          <input
            type="password"
            {...register("password")}
            id="passowrd"
            className="w-3/4 h-10 pl-3 border rounded border-blue-700 focus:outline-yellow-200"
            placeholder="Enter Password"
          />
        </div>
        <div className="w-full flex justify-start items-center pl-3">
          <button className="bg-blue-700 text-white font-bold text-lg flex justify-center item-center rounded p-2 shadow-md cursor-pointer hover:shadow-lg hover:shadow-yellow-100">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login