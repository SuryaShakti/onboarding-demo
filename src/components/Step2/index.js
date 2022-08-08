import React from 'react'

const Step2 = ({setCurrentStep}) => {
  return (
    <div>
      <div className="text-2xl md:text-3xl text-center font-semibold mt-20">
        Let's set up a home for all your work
      </div>
      <div className="text-gray-500 mt-2 text-center">
        You can always create a another workspace later.
      </div>

      <div className="mt-10 w-full max-w-md mx-auto">
        <div>
          <label
            htmlFor="workName"
            className="block text-sm w-full font-medium text-gray-600"
          >
            Workspace Name
          </label>
          <div className="mt-1 w-full relative rounded-md shadow-sm">
            <input
              type="text"
              name="workName"
              id="workName"
              className="focus:ring-indigo-500 border focus:border-indigo-500 block w-full py-2 pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Eden"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="company-website"
            className="block text-sm font-medium text-gray-700"
          >
            Workspace URL
            <span className="ml-2 text-gray-400">(Optional)</span>
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-slate-50 text-gray-500 sm:text-sm">
              www.eden.com/
            </span>
            <input
              type="text"
              name="company-website"
              id="company-website"
              className="flex-1 min-w-0 block border w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              placeholder="example"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setCurrentStep(3)}
        className="w-full  max-w-md mx-auto py-3 rounded-md flex justify-center bg-indigo-500 text-white text-xs mt-5"
      >
        Create Workspace
      </button>
    </div>
  );
}

export default Step2