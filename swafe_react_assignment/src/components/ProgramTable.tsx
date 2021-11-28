import React from 'react';
import { Exercise } from '../models/Exercise';

type ProgramTableProps = {
  exercises: Exercise[] | undefined;
}

function ProgramTable(props: ProgramTableProps) {

  return (
    <div className="m-2">
      <table className="w-full table-fixed border-collapse border border-black">
        <thead>
          <tr>
            <th className="w-1/6 border border-black py-2">Exercise</th>
            <th className="w-3/6 border border-black py-2">Description</th>
            <th className="w-1/6 border border-black py-2">Sets</th>
            <th className="w-1/6 border border-black py-2">Reps/time</th>
          </tr>
        </thead>
        <tbody>
          {props.exercises?.map((exercise =>
            <tr>
              <td className="w-1/6 border border-black p-1" >{exercise.name}</td>
              <td className="w-3/6 border border-black p-1">{exercise.description}</td>
              <td className="w-1/6 border border-black p-1">{exercise.sets}</td>
              <td className="w-1/6 border border-black p-1">{(exercise.repetitions ?? exercise.time) ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


}
export default ProgramTable;
