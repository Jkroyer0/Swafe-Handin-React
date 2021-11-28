import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../models/User';

type CreateClientProps = {
  //close: () => void;
}

function CreateClient(props: CreateClientProps) {

  const { register, handleSubmit, formState } = useForm<User>({ mode: "onChange" });

  return (
    <div className="flex h-full w-full  bg-gray-800 rounded-lg flex-col place-items-center" >
      <header className="text-2xl text-white m-6 text-center ">
        Create Client
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
          <div className="flex flex-col mb-2">
            <label className="text-white" >Trainer Id</label>
            <input type="number" {...register("personalTrainerId", { required: true })} className="rounded " />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-white" >Account Type</label>
            <select  {...register("accountType", { required: true })} className="rounded ">
              <option value="1" >Client</option>
              <option value="2" >Trainer</option>
            </select>
          </div>
          <input type="submit" value="Create User" disabled={!formState.isValid} className={`flex p-1 text-white rounded m-2 ${formState.isValid ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400"} `} />
        </form>

      </div>
    </div>
  );

  function onSubmit(data: User) {
    //TODO handle actions for form submitted
    console.log("DATA: ", data)
  }
}
export default CreateClient;