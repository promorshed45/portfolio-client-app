import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { loginUser } from "../services/AuthService";


export const useUserLogin = (): FieldValues => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: (data) => {
      if(data.success){
        toast.success("User login successful.");
      }else{
        toast.error(data.message)
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};


