"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

import nexiosInstance from "../../config/nexios.config";
import axiosInstance from "../../lib/axiosInstance";
import { IUser } from "@/src/types";

interface AuthResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}


export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await nexiosInstance.post<AuthResponse>(
      "/auth/login",
      userData,
    );

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};


export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};


export const getCurrentUser = async (): Promise<IUser | null> => {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    // console.log("No access token found.");
    return null;
  }

  try {
    const decodedToken: any = jwtDecode(accessToken);
    if (!decodedToken._id) {
      console.error("Invalid token: Missing user ID.");
      return null;
    }

    const id = decodedToken._id;
    // Fetch user data from the API
    const { data } = await nexiosInstance.get<{ data: IUser }>(`/users/${id}`, {
      next: {
        revalidate: 3600,
        tags: ['users']
      }
    });

    const userData = data?.data;

    if (!userData) {
      console.error("User data not found.");
      return null;
    }

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};



export const gettoken = () => {
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    console.error("No access token found");

    return null;
  }

  return accessToken;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookies: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};
