import React, { useEffect, useState } from 'react';
import { Exercise } from '../models/Exercise';
import { Program } from '../models/Program';
import { Link } from 'react-router-dom';
import CreateClient from '../components/CreateClient';
import CreateWorkout from '../components/CreateWorkout';
import ClientList from '../components/ClientList';
import { User } from '../models/User';
import ProgramList from '../components/ProgramList';


function Trainer() {

  const client: User = {
    userId: 1,
    email: "wow@gmail.com",
    firstName: "Owen",
    lastName: "Wilson",
    accountType: 2,
    password: "WooW",
    personalTrainerId: 1
  }

  // *** DUMMY DATA *** 
  const ex1: Exercise = {
    name: "Bench",
    exerciseId: 1,
    description: "Push hard brotha",
    sets: 2,
    repetitions: 2,
    programId: 1,
    trainerId: 1
  }
  const ex2: Exercise = {
    name: "Sqaut",
    exerciseId: 2,
    description: "Ass to grass ",
    sets: 2,
    repetitions: 2,
    programId: 1,
    trainerId: 1
  }
  const ex3: Exercise = {
    name: "Deadlift",
    exerciseId: 2,
    description: "HEAVY",
    sets: 2,
    repetitions: 2,
    programId: 1,
    trainerId: 1
  }
  const exerList: Exercise[] = [ex1, ex2];
  const programList: Program[] = [{
    programId: 1,
    name: "Strengt Conditioning",
    description: "Build muscle",
    exercises: exerList,
    trainerId: 1,
    clientId: 1
  }, {
    programId: 2,
    name: "HIIT Cardio",
    description: "FAST",
    exercises: [ex1, ex2, ex3],
    trainerId: 1,
    clientId: 1
  }]
  // ^^ *** DUMMY DATA *** ^^


  const tabs: JSX.Element[] = [
    <CreateClient />,
    <CreateWorkout exerOptions={[]} />,
    <ProgramList programs={programList} />,
    <ClientList clients={[client]} /> //TODO: get clients with service
  ];

  const [selectedTab, setSelectedTab] = useState<JSX.Element>();
  useEffect(() => setSelectedTab(tabs[0]), []) //TODO use service to get client programs


  return (
    <div className="flex w-screen h-screen bg-gray-700 justify-center" >
      <div className="flex w-full h-5/6 m-2 bg-gray-800 rounded-lg p-2 flex-col place-items-center " >
        <div className="flex flex-row w-full relative" >
          <header className="text-2xl text-white m-2 text-center w-full">
            Trainer
          </header>
          <Link to="/">
            <button className="bg-red-300 absolute h-8 rounded top-2 right-2 py-1 px-2 hover:bg-red-600" >Log Out</button>
            {/*TODO: use link/onclick to logout */}
          </Link>
        </div>
        <div className="flex w-full h-full mb-2 rounded" >
          <div className="flex flex-col w-1/6 h-full bg-green-200 rounded my-2 mr-1 " >
            <button onClick={() => setSelectedTab(tabs[0])} className="flex  p-4 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded m-1" >
              Create new client
            </button>
            <button onClick={() => setSelectedTab(tabs[1])} className="flex  p-4 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded m-1" >
              Create new workout
            </button>
            <button onClick={() => setSelectedTab(tabs[2])} className="flex  p-4 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded m-1" >
              Programs
            </button>
            <button onClick={() => setSelectedTab(tabs[3])} className="flex  p-4 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded m-1" >
              Clients
            </button>
          </div>
          <div className="flex w-5/6 h-full bg-blue-200 rounded my-2 justify-center" >
            {selectedTab}
          </div>
        </div>
      </div>
    </div>
  );




}
export default Trainer;