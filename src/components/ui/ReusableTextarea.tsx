"use client";
import { Textarea } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  rows?: number;
  placeholder?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
}

const ReusableTextarea = ({
  variant = "bordered",
  label,
  name,
  required = false,
  rows,
  placeholder,
  labelPlacement,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <Textarea
        {...register(name)}
        isInvalid={!!errors[name]}
        label={label}
        required={required}
        rows={rows}
        labelPlacement={labelPlacement}
        variant={variant}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ReusableTextarea;
