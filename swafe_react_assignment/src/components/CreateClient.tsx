import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../models/User';
import { useServiceContext } from '../services/ServiceContext';

type CreateClientProps = {
  //close: () => void;
}

function CreateClient(props: CreateClientProps) {

  const {userService} = useServiceContext();
  const { register, handleSubmit, formState } = useForm<User>({ mode: "onChange" });

  return (
    <div className="flex h-5/6 w-1/3  flex-col place-items-center" >
      <header className="text-2xl text-black m-6 text-center ">
        Create Client
      </header>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="flex flex-col mb-2">
            <label className="text-black" >First Name</label>
            <input type="text" {...register("firstName", { required: true })} className="rounded " />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black" >Last Name</label>
            <input type="text" {...register("lastName", { required: true })} className="rounded " />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black" >Email</label>
            <input type="text" {...register("email", { required: true })} className="rounded " />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black" >Password</label>
            <input type="text" {...register("password", { required: true })} className="rounded " />
          </div>
          <input type="submit" value="Create Client" disabled={!formState.isValid} className={`flex p-1 mt-6 rounded  ${formState.isValid ? "bg-blue-500 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-600"} `} />
        </form>

      </div>
    </div>
  );

  async function onSubmit(data: User) {
    //TODO handle actions for form submitted
     const trainerUser = await userService.getCurrentUser()
     .then(trainer => data.personalTrainerId = trainer?.userId)
     data.accountType = "Client";
     userService.addClient(data);
    // Trainer ID and account type should be set auto
    console.log("DATA: ", data)
  }
}
export default CreateClient;