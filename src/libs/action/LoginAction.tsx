"use server";
import { v4 as uuidv4 } from "uuid";

export async function joinUserAction(formData: FormData) {
  const userData = {
    userData: {
      userId: "",
      password: "",
      credit: {
        creditAmount: 1000,
        creditHistory: {
          usedHistory: [],
          deleteHistory: [],
          getHistory: [],
        },
      },
      quiz: {
        isSolved: 0,
        amount: 0,
        sequenceDays: 0,
      },
      gamePredict: {
        choose: "",
        sequenceDays: 0,
      },
      userUuid: uuidv4(),
      nickname: "",
    },
  };
  const id = formData.get("id");
  const password = formData.get("password");
  const passwordCheck = formData.get("passwordCheck");

  try {
    if (password !== passwordCheck) {
      return { success: false, message: "비밀번호가 일치하지 않습니다." };
    }
  } catch (error) {
    return { success: false };
  }
  userData.userData.userId = id as string;
  userData.userData.password = password as string;

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/insert_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (result.status === 200) {
    return { redirect: "/login" };
  }
}

export async function loginAction(formData: FormData) {
  const userData = {
    userId: "",
    password: "",
  };
  const id = formData.get("id");
  const password = formData.get("password");

  userData.userId = id as string;
  userData.password = password as string;

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!result.ok) {
    return { status: result.status };
  }

  const data = await result.json();
  return { data: data.userData, status: result.status };
}
