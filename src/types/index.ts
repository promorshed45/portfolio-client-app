import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IParamsProps {
  params: {
    id: string;
  };
}

export interface IInput {
  variant?: "flat" | "faded" | "bordered" | "underlined";
  name: string; 
  label: string; 
  required?: boolean; 
  placeholder?: string;
  endContent?: React.ReactNode;
  type: string; 
  size?: "sm" | "md" | "lg"; 
  labelPlacement?: "outside" | "outside-left" | "inside";
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
  passwordChangedAt: string;
  accessToken?: string;
  refreshToken?: string;
}


