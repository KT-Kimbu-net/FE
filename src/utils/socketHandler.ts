import { resizeImageFile } from "./img/imgResizer";
import { formatMessageDate } from "./date";
import { chatSocket } from "@/socket/ChatSocket";
import { nanoid } from "nanoid";
import { UserData } from "@/types/api";

export const imageResizerSocketHandler = async (
  e: React.ChangeEvent<HTMLInputElement>,
  userData: UserData
) => {
  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];
    const supportedFormats = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!e.target.files[0]) return;
    if (!supportedFormats.includes(file.type)) {
      alert(
        "지원하지 않은 이미지 형식입니다. JPEG, PNG, SVG형식의 이미지를 업로드해주세요."
      );
      return;
    }
    try {
      const compressedFile = await resizeImageFile(file);
      const resultTime = formatMessageDate();

      const sendMessage = {
        nickname: userData?.nickname,
        message: compressedFile,
        time: resultTime,
        report: [],
        msgId: nanoid(),
        userId: userData?.userId,
        type: "IMAGE",
      };
      chatSocket.emit("chatting", sendMessage);
    } catch (error) {
      console.log("image resizing failed......");
    }
  }
};
