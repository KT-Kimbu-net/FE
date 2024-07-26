import QuizStartBody from "./QuizStartBody";
import ModalLayout from "../Common/ModalLayout";
import CloseButton from "../Common/CloseButton";

export default function QuizStart() {
  return (
    <>
      <ModalLayout className="bg-[#a42a2a] w-[500px] h-[550px]">
        <CloseButton />
        <QuizStartBody />
      </ModalLayout>
    </>
  );
}
