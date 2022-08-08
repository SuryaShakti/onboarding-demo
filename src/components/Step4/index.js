import React from "react";
import check from "../../assets/images/circle check.png";

const Step4 = ({setCurrentStep}) => {
  return (
    <div>
      <div>
        <img
          src={check}
          alt="check icon"
          className="text-indigo-500 mx-auto mt-20 mb-10"
        />
      </div>
      <div className="text-2xl text-center md:text-3xl font-semibold ">
        Congratulations, Eren!
      </div>
      <div className="text-gray-400 text-center mt-2">
        You have completed the onboarding, you can start using the Eden!
      </div>

      <div className="mt-10 w-full max-w-md mx-auto">
        <button
          onClick={() => setCurrentStep(1)}
          className="w-full  max-w-md mx-auto py-3 rounded-md flex justify-center bg-indigo-500 text-white text-xs mt-5"
        >
          Launch Eden
        </button>
      </div>
    </div>
  );
};

export default Step4;
