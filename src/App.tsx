import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleSubmit = async (data) => {
    setFormData({ ...formData, ...data });

    alert("Boeking is succesvol! Bevestigingsmail is verstuurd.");
  };

  return (
    <>
      <div className='px-4 py-14 md:py-16 lg:py-24" lg:py-16"} md:px-6'>
        <div className=" relative mx-auto w-full max-w-screen-xl flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6">Afspraak inplannen</h1>
          <div>
            {step === 1 && <StepOne onNext={handleNextStep} />}
            {step === 2 && <StepTwo onNext={handleNextStep} />}
            {step === 3 && <StepThree onNext={handleNextStep} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
