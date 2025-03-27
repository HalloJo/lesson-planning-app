import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { FormDataType } from "./types";

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    classSchool: "",
    appointmentType: "",
    teacher: "",
    subject: [],
    remarks: "",
    lesson: "",
  });

  const handleNextStep = (data: Partial<FormDataType>) => {
    setFormData((previous) => ({ ...previous, ...data })); // Merge form data
    console.log("Form Data:", data);
    setStep((previous) => previous + 1);
  };

  const handlePreviousStep = () => {
    setStep((previous) => previous - 1);
  };

  const handleFinalSubmit = (data: Partial<FormDataType>) => {
    const fullFormData = { ...formData, ...data };
    console.log("Final Form Data Submitted:", fullFormData);
    alert("Boeking is succesvol! Bevestigingsmail is verstuurd.");
  };

  return (
    <>
      <div className='px-4 py-14 md:py-16 lg:py-24" lg:py-16"} md:px-6'>
        <div className=" relative mx-auto w-full max-w-screen-xl flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6">Afspraak inplannen</h1>
          <div>
            {step === 1 && (
              <StepOne onNext={handleNextStep} defaultValues={formData} />
            )}
            {step === 2 && (
              <StepTwo
                onNext={handleNextStep}
                onPrevious={handlePreviousStep}
                defaultValues={formData}
                appointmentType={formData.appointmentType}
              />
            )}
            {step === 3 && (
              <StepThree
                onNext={handleNextStep}
                onPrevious={handlePreviousStep}
                onSubmit={handleFinalSubmit}
                defaultValues={formData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
