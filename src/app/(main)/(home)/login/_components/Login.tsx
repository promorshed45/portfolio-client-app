"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Divider } from "@nextui-org/divider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { useUserLogin } from "@/src/hooks/auth.hook";
import ReusableInput from "@/src/components/ui/ReusableInput";
import ReusableForm from "@/src/components/ui/ReusableForm";
import { useUser } from "@/src/providers/user.provider";
import Loading from "@/src/components/ui/Loading";
import { Eye, EyeOff } from "lucide-react";
import { loginValidationSchema } from "@/src/schemas/login.schema";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();
  const redirect = searchParams.get("redirect");
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    mutate: handleUserLogin,
    isLoading,
    isSuccess,
    isError,
  } = useUserLogin(); 

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isLoading && !isError && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isLoading, isSuccess, isError, redirect]);

  // Show loading spinner while submitting
  if (isLoading) return <Loading />;

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-6 p-6 shadow-lg rounded-lg">
        {/* ReusableForm with ReusableInput */}
        <div className="py-3">
          <ReusableForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <ReusableInput label="Email" name="email" type="email" />
            <ReusableInput
              label="Password"
              name="password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="Toggle password visibility"
                >
                  {isVisible ? (
                    <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <Button className="w-full mt-4" type="submit">
              Submit
            </Button>
          </ReusableForm>
        </div>
      </div>
    </section>
  );
};

export default Login;
