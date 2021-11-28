import React from 'react';

type SignupProps = {
  close: () => void;
}

function Signup(props: SignupProps) {
  return (
    <div className="flex h-full w-full  bg-gray-800 rounded-lg flex-col place-items-center" >
      <header className="text-2xl text-white m-6 text-center ">
        Create Account
      </header>
      <div className="flex w-2/3 flex-col mt-6 " >
        <div className="flex  flex-col  place-items-center m-2" >
          <label className="flex text-xl text-white">Email</label>
          <input type="text" className="flex w-2/3 bg-gray-200 border-2 rounded border-green-600 "  ></input>
        </div>
        <div className="flex  flex-col place-items-center m-2" >
          <label className="text-xl text-white">Password</label>
          <input type="text" className="bg-gray-200 w-2/3 rounded border-green-600 "  ></input>
        </div>
        <div className="flex m-6 place-items-center justify-center " >
          <button className="bg-blue-300 w-1/3 rounded hover:bg-blue-500 m-2 " >Create</button>
          <button onClick={() => props.close()} className="bg-red-300 w-1/3 rounded hover:bg-red-500 m-2 ">Cancel</button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
