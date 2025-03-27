import { FormDataType } from "../types";
import { useForm } from "react-hook-form";
import { subjects, teachers } from "../data/data";

type StepProps = {
  onNext: (data: Partial<FormDataType>) => void;
  onPrevious: () => void;
  defaultValues: Partial<FormDataType>;
  appointmentType: string;
};

export default function StepTwo({
  onNext,
  onPrevious,
  defaultValues,
  appointmentType,
}: StepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const level = defaultValues.tutoringLevel || "unknown";

  const availableSubjects = subjects.filter((subject) =>
    appointmentType === "introduction"
      ? subject.types.includes(appointmentType)
      : subject.types.includes(appointmentType) &&
        subject.level?.includes(level)
  );

  const availableTeachers = teachers.filter((teacher) =>
    appointmentType === "introduction"
      ? teacher.types.includes(appointmentType)
      : teacher.types.includes(appointmentType) &&
        teacher.level?.includes(level)
  );

  return (
    <div>
      <h2 className="font-medium mb-4">Stap 2: Vakspecifieke informatie</h2>
      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div className="flex gap-2">
          <label>Docent*</label>
          {availableTeachers.map((teacher) => (
            <div key={teacher.id}>
              <input
                type="radio"
                value={teacher.name}
                {...register("teacher", {
                  required: "Kies een docent",
                })}
              />
              <span>{teacher.name}</span>
            </div>
          ))}
          {errors.teacher?.message && (
            <p className="text-red-500">{String(errors.teacher.message)}</p>
          )}
        </div>

        <div>
          <label>Vakken*</label>
          {availableSubjects.map((subject) => (
            <div key={subject.id}>
              <input
                type="checkbox"
                value={subject.name}
                {...register("subject", {
                  required: "Kies tenminste één vak",
                })}
              />
              <span>{subject.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <label>Hoofdstuk/vragen/opmerkingen</label>
          <textarea className="border-1" {...register("remarks")}></textarea>
        </div>

        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-500 text-white px-4 py-2"
        >
          Vorige
        </button>
        <button className="bg-black text-white px-4 py-2" type="submit">
          Volgende
        </button>
      </form>
    </div>
  );
}
