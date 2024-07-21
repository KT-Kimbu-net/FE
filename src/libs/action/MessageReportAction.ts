"use server";

import { cookies } from "next/headers";

export default async function messageReportAction(formData: FormData) {
  const reportInfo = {
    type: "",
    msgId: "",
    userId: "",
  };
  const token = cookies().get("token")?.value;

  const type = formData.get("report");
  const msgId = formData.get("msgId");
  const userId = formData.get("userId");

  reportInfo.type = type as string;
  reportInfo.msgId = msgId as string;
  reportInfo.userId = userId as string;

  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_CHAT_BASEURL}/message/report`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(reportInfo),
      }
    );
    if (result.ok) {
      return { status: result.status };
    }
  } catch (error) {
    console.log(error);
  }
}
