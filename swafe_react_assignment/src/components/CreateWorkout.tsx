import React from 'react';
import { useForm } from 'react-hook-form';
import { Program } from '../models/Program';
import { Exercise } from '../models/Exercise';
import { User } from '../models/User';

type CreateWorkoutProps = {
  exerOptions: Exercise[];
}

function CreateWorkout(props: CreateWorkoutProps) {

  const { register, handleSubmit, formState } = useForm<Program>({ mode: "onChange" });

  return (
    <div className="flex h-full w-full  flex-col place-items-center" >
      <header className="text-2xl text-black m-6 text-center ">
        Create Workout Program
      </header>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="flex flex-col mb-2">
            <label className="text-black" >Name</label>
            <input type="text" {...register("name", { required: true })} className="rounded " />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black" >Description</label>
            <input type="text" {...register("description", { required: true })} className="rounded " />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black" >Exercises</label>
            <p className="text-black text-xs p-1" >(Use ctrl/cmd button to select several options.)</p>
            <select multiple={true}  {...register("exercises")} className="rounded ">
              {props.exerOptions.map((exer) =>
                <option value={exer.exerciseId} >{exer.name}</option>
              )}
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black" >Client Id</label>
            <input type="number" {...register("clientId", { required: true })} className="rounded " />
          </div>
          <input type="submit" value="Create Program" disabled={!formState.isValid} className={`flex p-1  rounded mt-6 ${formState.isValid ? "bg-blue-500 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-600"} `} />
        </form>
      </div>
    </div>
  );

  function onSubmit(data: User) {
    //TODO handle actions for form submitted
    // Trainer ID set auto
    console.log("DATA: ", data)
  }
}
export default CreateWorkout;