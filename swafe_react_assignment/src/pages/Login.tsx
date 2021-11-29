import React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useServiceContext } from '../services/ServiceContext';
import { useForm } from 'react-hook-form';
import { LoginDTO } from '../models/LoginDTO';

function Login() {

  const { register, handleSubmit } = useForm<LoginDTO>();
  const { userService } = useServiceContext();
  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen bg-gray-700 justify-center" >
      <div className="flex w-1/3 h-1/3 bg-gray-800 rounded-lg m-2 p-2 flex-col place-items-center " >
        <header className="text-2xl text-white m-2 text-center ">
          Login
        </header>
        <form className="flex w-full h-full justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-2/3 flex-col mt-6 " >
            <div className="flex  flex-col  place-items-center m-2" >
              <label className="flex text-xl text-white">Email</label>
              <input type="text" className="flex w-2/3 bg-gray-200 border-2 rounded border-green-600 " {...register("email", { required: true })} ></input>
            </div>
            <div className="flex  flex-col place-items-center m-2" >
              <label className="text-xl text-white">Password</label>
              <input type="text" className="bg-gray-200 w-2/3 rounded border-green-600 " {...register("password", { required: true })}  ></input>
            </div>
            <div className="flex my-4 place-items-center justify-center " >
              <button type="submit" className="bg-blue-300 w-1/3 rounded hover:bg-blue-500 m-2 " > Login </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );

  async function onSubmit(data: LoginDTO) {
    const res = await userService.login(data);
    console.log("accountType: ", res?.accountType);
    switch (res?.accountType) {
      case "Manager":
        navigate('/manager');
        break;
      case "PersonalTrainer":
        navigate('/trainer');
        break;
      case "Client":
        navigate('/client');
        break;
      default:
        break;
    }
  }

}
export default Login;
