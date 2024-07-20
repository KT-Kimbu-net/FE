"use server";

import { cookies } from "next/headers";

export async function getMyDataAction() {
  const token = cookies().get("token")?.value;

  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/user/my_data`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    if (result.ok) {
      const data = await result.json();
      return { data, status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
