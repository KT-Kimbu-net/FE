import ChangePlayer from "@/components/Admin/ChangePlayer";
import ChangeScore from "@/components/Admin/ChangeScore";

export default function page() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <ChangeScore />
        <ChangePlayer/>
      </div>
    </>
  );
}
