import React from 'react';
import { useForm } from 'react-hook-form';
import { Exercise } from '../models/Exercise';

type AddExerToProgramProps = {
  close: () => void;
  exerOptions: Exercise[];
}

function AddExerToProgram(props: AddExerToProgramProps) {

  const { register, handleSubmit, formState } = useForm<Exercise>({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="flex h-full w-full  bg-gray-800 rounded-lg flex-col place-items-center" >
        <header className="text-2xl text-white m-6 text-center ">
          Add Exercise to Program
        </header>
        <div className="flex w-2/3 flex-col mt-6 " >

          <div className="flex flex-col mb-2">
            <label className="text-black" >Exercises</label>
            <p className="text-black text-xs p-1" >(Use ctrl/cmd button to select several options.)</p>
            <select multiple={true} className="rounded ">
              {props.exerOptions.map((exer) =>
                <option value={exer.exerciseId} >{exer.name}</option>
              )}
            </select>
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
    // register how??
    console.log("DATA: ", data);
    props.close();
  }

}
export default AddExerToProgram;
