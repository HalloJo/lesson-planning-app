import React from "react";
import { FormDataType } from "../types";
import { useForm } from "react-hook-form";

type StepProps = {
  defaultValues: Partial<FormDataType>;
  onNext: (data: Partial<FormDataType>) => void;
};

export default function StepOne({ onNext, defaultValues }: StepProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const appointmentType = watch("appointmentType");

  return (
    <div>
      <h2 className="font-medium mb-4">Stap 1: Algemene informatie</h2>
      <form onSubmit={handleSubmit(onNext)} className="flex flex-col space-y-4">
        <div className="flex gap-2">
          <label htmlFor="name">Naam*</label>
          <input
            className="border-1"
            type="text"
            {...register("name", { required: "Naam is verplicht" })}
          />
          {errors.name?.message && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
        </div>
        <div className="flex gap-2">
          <label>Telefoonnummer*</label>
          <input
            className="border-1"
            type="tel"
            {...register("phone", { required: "Telefoonnummer is verplicht" })}
          />
          {errors.phone?.message && (
            <p className="text-red-500">{String(errors.phone.message)}</p>
          )}
        </div>
        <div className="flex gap-2">
          <label>Email*</label>
          <input
            className="border-1"
            type="email"
            {...register("email", { required: "Email is verplicht" })}
          />
          {errors.email?.message && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
        </div>
        <div className="flex gap-2">
          <label>Klas en school*</label>
          <input
            className="border-1"
            type="text"
            {...register("classSchool", {
              required: "Klas en school zijn verplicht",
            })}
          />
          {errors.classSchool?.message && (
            <p className="text-red-500">{String(errors.classSchool.message)}</p>
          )}
        </div>
        <div className="flex gap-2">
          <label>Soort afspraak*</label>
          <div>
            <input
              type="radio"
              value="introduction"
              {...register("appointmentType", {
                required: "Kies een type afspraak",
              })}
            />{" "}
            Kennismaking
            <input
              type="radio"
              value="tutoring"
              {...register("appointmentType", {
                required: "Kies een type afspraak",
              })}
            />{" "}
            Bijles
            <input
              type="radio"
              value="individual"
              {...register("appointmentType", {
                required: "Kies een type afspraak",
              })}
            />{" "}
            Individuele huiswerkbegeleiding
          </div>
          {errors.appointmentType?.message && (
            <p className="text-red-500">
              {String(errors.appointmentType.message)}
            </p>
          )}
        </div>
        {(appointmentType === "tutoring" ||
          appointmentType === "individual") && (
          <div className="flex gap-2">
            <label>Niveau*</label>
            <select
              {...register("tutoringLevel", { required: "Kies een niveau" })}
            >
              <option value="elementary">Basisschool</option>
              <option value="secondary">Middelbare school</option>
              <option value="mbo">MBO</option>
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
