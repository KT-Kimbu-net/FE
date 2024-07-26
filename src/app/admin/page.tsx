import ChangeKtScore from "@/components/Admin/ChangeKtScore";
import ChangeNcScore from "@/components/Admin/ChangeNcScore";
import ChangePlayer from "@/components/Admin/ChangePlayer";
import ChangeScore from "@/components/Admin/ChangeScore";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        {/* <ChangeScore /> */}
        <div className="w-full flex gap-5 items-center justify-center">
          <ChangeKtScore />
          <ChangeNcScore />
        </div>
        <ChangePlayer />
      </div>
    </>
  );
}
