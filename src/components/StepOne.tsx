import React from "react";
import { FormDataType } from "../types";
import { useForm, useWatch } from "react-hook-form";

type StepProps = {
  onNext: (data: Partial<FormDataType>) => void;
};

export default function StepOne({ onNext }: StepProps) {
  const { register, handleSubmit, watch } = useForm();

  const appointmentType = watch("appointmentType");

  const onSubmit = (data: Partial<FormDataType>) => {
    // onNext(data);
    console.log("Step 1 Form Data:", data); // Logs form data in console
  };

  return (
    <div>
      <h2 className="font-medium mb-4">Stap 1: Algemene informatie</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex gap-2">
          <label htmlFor="name">Naam*</label>
          <input
            className="border-1"
            type="text"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex gap-2">
          <label>Telefoonnummer*</label>
          <input
            className="border-1"
            type="tel"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="flex gap-2">
          <label>Email*</label>
          <input
            className="border-1"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex gap-2">
          <label>Klas en school*</label>
          <input
            className="border-1"
            type="email"
            {...register("classSchool", { required: true })}
          />
        </div>
        <div className="flex gap-2">
          <label>Soort afspraak*</label>
          <div>
            <input
              type="radio"
              value="introduction"
              {...register("appointmentType", { required: true })}
            />{" "}
            Kennismaking
            <input
              type="radio"
              value="tutoring"
              {...register("appointmentType", { required: true })}
            />{" "}
            Bijles
            <input
              type="radio"
              value="individual"
              {...register("appointmentType", { required: true })}
            />{" "}
            Individuele huiswerkbegeleiding
          </div>
        </div>
        {appointmentType === "tutoring" && (
          <div className="flex gap-2">
            <label>Niveau bijles*</label>
            <select {...register("tutoringLevel", { required: true })}>
              <option value="vmbo">VMBO</option>
              <option value="havo">HAVO</option>
              <option value="vwo">VWO</option>
            </select>
          </div>
        )}

        <button className="border-2 rounded-xl" type="submit">
          Volgende
        </button>
      </form>
    </div>
  );
}
