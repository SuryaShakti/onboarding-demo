import React from 'react'

const Step1 = ({setCurrentStep}) => {
  return (
    <div>
      <div className="text-2xl md:text-3xl text-center font-semibold mt-20">
        Welcome! First things first...
      </div>
      <div className="text-gray-500 mt-2 text-center">
        You can always change them later.
      </div>

      <div className="mt-10 w-full">
        <div>
          <label
            htmlFor="name"
            className="block text-sm w-full font-medium text-gray-600"
          >
            Full Name
          </label>
          <div className="mt-1 w-full relative rounded-md shadow-sm">
            <input
              type="text"
              name="name"
              id="name"
              className="focus:ring-indigo-500 border focus:border-indigo-500 block w-full py-2 pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Steve Jobs"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="displayName"
            className="block text-sm w-full font-medium text-gray-600"
          >
            Display Name
          </label>
          <div className="mt-1 w-full relative rounded-md shadow-sm">
            <input
              type="text"
              name="displayName"
              id="displayName"
              className="focus:ring-indigo-500 border focus:border-indigo-500 block w-full py-2 pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Steve"
            />
          </div>
        </div>
        <button
          onClick={() => setCurrentStep(2)}
          className="w-full py-3 rounded-md flex justify-center bg-indigo-500 text-white text-xs mt-5"
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default Step1