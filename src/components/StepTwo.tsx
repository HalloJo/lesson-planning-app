import React from "react";
import { FormDataType } from "../types";

type StepProps = {
  onNext: (data: Partial<FormDataType>) => void;
};

export default function StepTwo({ onNext }: StepProps) {
  return <div>StepTwo</div>;
}
