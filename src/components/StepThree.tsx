import React from "react";
import { FormDataType } from "../types";

type StepProps = {
  onNext: (data: Partial<FormDataType>) => void;
};

export default function StepThree({ onNext }: StepProps) {
  return <div>StepThree</div>;
}
