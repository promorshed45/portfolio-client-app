"user client";
import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {}

const ReusableInput = ({
  variant= "bordered",
  size = "sm",
  required = false,
  type,
  label,
  name,
  placeholder,
  labelPlacement,
  endContent,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <Input
        {...register(name)}
        errorMessage={
          errors[name]?.message ? (errors[name]?.message as string) : ""
        }
        isInvalid={!!errors[name]}
        label={label}
        required={required}
        size={size}
        type={type}
        placeholder={placeholder}
        endContent={endContent}
        variant={variant}
        labelPlacement={labelPlacement}
      />
    </div>
  );
};

export default ReusableInput;
