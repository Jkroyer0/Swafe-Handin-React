import React from 'react';
import { useToggle } from '../hooks/useToggle';
import Popup from 'reactjs-popup';
import Signup from '../components/Signup';
import './Login.css';
import { Link } from "react-router-dom";
import { useServiceContext } from '../services/ServiceContext';
import {useForm} from 'react-hook-form';
import { LoginDTO } from '../models/LoginDTO';


function Login() {

  const {register, handleSubmit} = useForm<LoginDTO>();
  const {userService} = useServiceContext();
  const signupToggle = useToggle();


  return (
    <div className="flex w-screen h-screen bg-gray-700 justify-center" >
      <div className="flex w-1/3 h-1/3 bg-gray-800 rounded-lg m-2 p-2 flex-col place-items-center " >
        <form onSubmit={handleSubmit(onSubmit)}>
        <header className="text-2xl text-white m-2 text-center ">
          Login
        </header>
        <div className="flex w-2/3 flex-col mt-6 " >
          <div className="flex  flex-col  place-items-center m-2" >
            <label className="flex text-xl text-white">Email</label>
            <input type="text" className="flex w-2/3 bg-gray-200 border-2 rounded border-green-600 " {...register("email", {required: true})} ></input>
          </div>
          <div className="flex  flex-col place-items-center m-2" >
            <label className="text-xl text-white">Password</label>
            <input type="text" className="bg-gray-200 w-2/3 rounded border-green-600 " {...register("password",{required: true})}  ></input>
          </div>
          <div className="flex my-4 place-items-center justify-center " >
            
              <button type="submit" className="bg-blue-300 w-full rounded hover:bg-blue-500 m-2 " > Login </button>
          
            <button onClick={() => signupToggle.toggle()} className="bg-green-300 w-1/3 rounded hover:bg-green-500 mx-4 ">Sign up</button>
          </div>
        </div>
        </form>
        <Popup className="popup-content" open={signupToggle.isToggled} contentStyle={{ height: "500px", minWidth: "700px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.18) " }} onClose={signupToggle.toggleOff} modal>
          {signupToggle.isToggled ? <Signup close={signupToggle.toggleOff} /> : ""}
        </Popup>     
      </div>
    </div>
  );
  function attemptLogin(){

  }
  function onSubmit(data: LoginDTO){
    console.log("handling data", data);
    userService.login(data)
    
  }
}
export default Login;
