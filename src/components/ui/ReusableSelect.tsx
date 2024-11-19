import { Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface IProps {
  required?: boolean;
  name: string;
  label?: string;
  options: { key: string; label: string }[];
  size?:"sm"|"md"|"lg";
  defaultValue?: string | undefined;
  labelPlacement?: "outside" | "outside-left" | "inside";
}

const ReusableSelect = ({
  name,
  label,
  options,
  size="md",
  defaultValue,
  required = false,
  labelPlacement,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <Select labelPlacement={labelPlacement} label={label} {...register(name)} className="w-full" defaultSelectedKeys={defaultValue ? [defaultValue] : undefined} errorMessage={ errors[name]?.message as string | undefined }
    isInvalid={!!errors[name]}
    isRequired={required}
    size={size}
    variant="bordered">
      {options?.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default ReusableSelect;