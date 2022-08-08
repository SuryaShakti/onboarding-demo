import Steps from "./components/Steps";
import logo from "./assets/images/Screenshot 2022-08-08 205201.png";
import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full h-screen p-2 flex flex-col justify-center items-center">
      <div className="md:w-max flex flex-col justify-center items-center">
        <img className="w-min mb-20" src={logo} alt="logo" />
        <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

        {currentStep === 1 ? (
          <Step1 setCurrentStep={setCurrentStep} />
        ) : currentStep === 2 ? (
          <Step2 setCurrentStep={setCurrentStep} />
        ) : currentStep === 3 ? (
          <Step3 setCurrentStep={setCurrentStep} />
        ) : (
          <Step4  setCurrentStep={setCurrentStep} />
        )}
      </div>
    </div>
  );
}

export default App;
