import React from 'react';
import { useForm } from 'react-hook-form';
import { Exercise } from '../models/Exercise';

type AddExerciseProps = {
  close: () => void;
}

function AddExercise(props: AddExerciseProps) {

  const { register, handleSubmit, formState } = useForm<Exercise>({ mode: "onChange" });

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)} >
      <div className="flex h-full w-full  bg-gray-800 rounded-lg flex-col place-items-center" >
        <header className="text-2xl text-white m-6 text-center ">
          Add Exercise
        </header>

        <div className="flex w-2/3 flex-col mt-6 " >
          <div className="flex  flex-col  place-items-center m-2" >
            <label className="flex text-xl text-white">Name</label>
            <input type="text" {...register("name", { required: true })} className="flex w-2/3 bg-gray-200 border-2 rounded border-green-600 "  ></input>
          </div>
          <div className="flex  flex-col place-items-center m-2" >
            <label className="text-xl text-white">Description</label>
            <input type="text"{...register("description", { required: true })} className="bg-gray-200 w-2/3 rounded border-green-600 "  ></input>
          </div>
          <div className="flex  flex-col place-items-center m-2" >
            <label className="text-xl text-white">Sets/Time</label>
            <input type="text" {...register("sets", { required: true })} className="bg-gray-200 w-2/3 rounded border-green-600 "  ></input>
          </div>
          <div className="flex  flex-col place-items-center m-2" >
            <label className="text-xl text-white">Repitions</label>
            <input type="number" {...register("repetitions", { required: true })} className="bg-gray-200 w-2/3 rounded border-green-600 "  ></input>
          </div>
          <div className="flex m-6 place-items-center justify-center " >
            <button type="submit" disabled={!formState.isValid} className={`flex w-1/3 justify-center rounded  ${formState.isValid ? "bg-blue-500 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-600"} `} >Create</button>
            <button onClick={() => props.close()} className="bg-red-300 w-1/3 rounded hover:bg-red-500 m-2 ">Cancel</button>
          </div>
        </div>

      </div>
    </form>
  );

  function onSubmit(data: Exercise) {
    //TODO handle actions for form submitted
    // Trainer ID and account type should be set auto
    console.log("DATA: ", data);
    props.close();
  }

}
export default AddExercise;
