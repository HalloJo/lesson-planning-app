import React from "react";
import { FormDataType } from "../types";
import { useForm } from "react-hook-form";

type StepProps = {
  onNext: (data: Partial<FormDataType>) => void;
  onPrevious: () => void;
  onSubmit: (data: Partial<FormDataType>) => void;
  defaultValues: Partial<FormDataType>;
};

export default function StepThree({
  onPrevious,
  onSubmit,
  defaultValues,
}: StepProps) {
  const {
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <div>
      <h2>Stap 3: Kies datum en tijd</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-500 text-white px-4 py-2"
        >
          Vorige
        </button>
        <button className="bg-black text-white px-4 py-2" type="submit">
          Plan in en betaal
        </button>
      </form>
    </div>
  );
}
