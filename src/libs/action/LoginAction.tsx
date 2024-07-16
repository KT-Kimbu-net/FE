"use server";

export async function joinUserAction(formData: FormData) {
  const userData = {
    userData: {
      userId: "",
      password: "",
    },
  };
  const id = formData.get("id");
  const password = formData.get("password");
  const passwordCheck = formData.get("passwordCheck");

  try {
    if (password !== passwordCheck) {
      return { success: false, message: "비밀번호가 일치하지 않습니다." };
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
  } catch (error) {
    return { success: false };
  }
  userData.userData.userId = id as string;
  userData.userData.password = password as string;
  const result = await fetch("http://3.35.50.52:5002/insert_user", {
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
  const result = await fetch("http://3.35.50.52:5002/user/login", {
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
