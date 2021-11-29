import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { User } from '../models/User';
import { useServiceContext } from '../services/ServiceContext';

function Manager() {

  const { register, handleSubmit, formState, reset } = useForm<User>({ mode: "onChange" });
  const navigate = useNavigate();
  const { userService } = useServiceContext();

  return (
    <div className="flex w-screen h-screen min-h bg-gray-700 justify-center" >
      <button onClick={() => logout()} className="bg-red-300 absolute h-8 rounded top-2 right-2 py-1 px-2 hover:bg-red-600" >Log Out</button>
      <div className="flex w-1/3 bg-gray-800 rounded-lg m-2 p-2 flex-col place-items-center " >
        <header className="text-2xl text-white m-2 text-center ">
          Manager
        </header>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-col mb-2">
              <label className="text-white" >First Name</label>
              <input type="text" {...register("firstName", { required: true })} className="rounded " />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-white" >Last Name</label>
              <input type="text" {...register("lastName", { required: true })} className="rounded " />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-white" >Email</label>
              <input type="text" {...register("email", { required: true })} className="rounded " />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-white" >Password</label>
              <input type="text" {...register("password", { required: true })} className="rounded " />
            </div>
            <input type="submit" value="Create User" disabled={!formState.isValid} className={`flex p-1 text-white rounded m-2 ${formState.isValid ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400"} `} />
          </form>
        </div>
      </div>
    </div>
  );

  function onSubmit(data: User) {
    data.accountType = "PersonalTrainer";
    console.log("DATA: ", data)
    const res = userService.addTrainer(data);
    reset();
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    navigate('/');
  }
}
export default Manager;