"use server";

import { redirect } from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
    {
      method: "post",
      body: formData,
      credentials: "include",
    }
  );
  redirect("/home");
};
