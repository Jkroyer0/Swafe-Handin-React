import React, { useEffect, useState } from 'react';
import ProgramTable from '../components/ProgramTable';
import { Program } from '../models/Program';
import { Link } from 'react-router-dom';
import { useServiceContext } from '../services/ServiceContext';

function Client() {
  const { programService, userService } = useServiceContext();
  useEffect(() => { getData() }, [])

  async function getData() {
    const res = await userService.getCurrentUser();
    if (res) setProgramList(await programService.getClientPrograms(res.userId));
  }

  const [selectedProgram, setSelectedProgram] = useState<Program | undefined>();
  const [programList, setProgramList] = useState<Program[]>([]);
  useEffect(() => setSelectedProgram(programList[0]), [])
  console.log("wat ", programList);
  return (
    <div className="flex w-screen h-screen bg-gray-700 justify-center" >
      <div className="flex w-full h-5/6 m-2 bg-gray-800 rounded-lg p-2 flex-col place-items-center " >
        <div className="flex flex-row w-full relative" >
          <header className="text-2xl text-white m-2 text-center w-full">
            Client
          </header>
          <Link to="/">
            <button className="bg-red-300 absolute h-8 rounded top-2 right-2 py-1 px-2 hover:bg-red-600" >Log Out</button>
            {/*TODO: use link/onclick to logout */}
          </Link>
        </div>
        <div className="flex w-full h-full mb-2 rounded" >
          <div className="flex flex-col w-1/6 h-full bg-green-200 rounded my-2 mr-1 " >
            {programList.map((program) =>
              <button className="flex  p-4 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded m-1" onClick={() => setSelectedProgram(program)}>
                {program.name}
              </button>
            )}
          </div>
          <div className="flex w-5/6 h-full bg-blue-200 rounded my-2" >
            <ProgramTable exercises={selectedProgram?.exercises} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Client;