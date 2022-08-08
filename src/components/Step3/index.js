import React from 'react'
import user from "../../assets/images/user.png";
import team from "../../assets/images/team.png";


const Step3 = ({setCurrentStep}) => {
  return (
    <div>
      <div className="text-2xl md:text-3xl text-center font-semibold mt-20">
        How are you planning to use Eden?
      </div>
      <div className="text-gray-400 mt-2 text-center">
        We'll streamline your setup experience accordingly.
      </div>

      <div className="mt-10 w-full max-w-md mx-auto">
        <div className="">
          <ul className="grid gap-2 md:gap-6 w-full max-w-sm mx-auto grid-cols-2">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                className="hidden peer"
                required
              />
              <label
                for="hosting-small"
                className="inline-flex justify-between items-center p-2 md:p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-indigo-500 hover:text-gray-600"
              >
                <div className="block">
                  <img src={user} alt={"user"} className="" />
                  <div className="w-full text-base font-semibold mt-6 mb-3 text-gray-600">
                    For Myself
                  </div>
                  <div className="w-full text-sm">
                    Write better. Think more clearly. Stay organized.
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                className="hidden peer"
              />
              <label
                for="hosting-big"
                className="inline-flex justify-between items-center p-2 md:p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-indigo-500 hover:text-gray-600 "
              >
                <div className="block">
                  <img src={team} alt={"team"} />
                  <div className="w-full text-base font-semibold mt-6 mb-3 text-gray-600">
                    With my team
                  </div>
                  <div className="w-full text-sm">
                    Wikis, docs, tasks & projects, all in one place.
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => setCurrentStep(4)}
        className="w-full  max-w-md mx-auto py-3 rounded-md flex justify-center bg-indigo-500 text-white text-xs mt-5"
      >
        Create Workspace
      </button>
    </div>
  );
}

export default Step3