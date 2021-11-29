import React from 'react';
import { Program } from '../models/Program';
import { useToggle } from '../hooks/useToggle';
import Popup from 'reactjs-popup';
import Signup from '../components/Signup';
import './ProgramList.css';
import AddExercise from './AddExercise';
import { Exercise } from '../models/Exercise';

type ProgramListProps = {
  programs: Program[] | undefined;
}

function ProgramList(props: ProgramListProps) {




  const addExerciseToggle = useToggle();
  const addExerToProgramToggle = useToggle();

  return (
    <div className="m-2">
      <table className="w-full table-fixed border-collapse border border-black">
        <thead>
          <tr>
            <th className="w-2/12 border border-black py-2">Program</th>
            <th className="w-5/12 border border-black py-2">Description</th>
            <th className="w-2/12 border border-black py-2">Exercises</th>
            <th className="w-2/12 border border-black py-2">Client Id</th>
            <th className="w-1/12 border border-black py-2"></th>
          </tr>
        </thead>
        <tbody>
          {props.programs?.map((program =>
            <tr>
              <td className="w-2/12 border border-black p-1" >{program.name}</td>
              <td className="w-5/12 border border-black p-1">{program.description}</td>
              <td className="w-2/12 border border-black p-1">{getNames(program.exercises)}</td>
              <td className="w-2/12 border border-black p-1">{program.clientId}</td>
              <td className="w-1/12 border border-black p-1">
                <button onClick={() => addExerToProgramToggle.toggle()} className=" p-1 bg-green-400 rounded hover:bg-green-500 " >Add Exercise</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => addExerciseToggle.toggle()} className="bg-green-300 shadow-md my-4 p-2 rounded hover:bg-green-500 ">Add New Exercise</button>
      <Popup className="popup-content" open={addExerciseToggle.isToggled} contentStyle={{ height: "500px", minWidth: "700px", backgroundColor: "rgba(0, 0, 0, 0)", boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.18) " }} onClose={addExerciseToggle.toggleOff} modal>
        {addExerciseToggle.isToggled ? <AddExercise close={addExerciseToggle.toggleOff} /> : ""}
      </Popup>

    </div>
  );

  function getNames(exercises: Exercise[]): string {
    let names: string = "";
    exercises.forEach((x) => {
      names = names + ", " + x.name;
    })
    return names.slice(2) ?? "";
  }


}
export default ProgramList;
