type TProps = {
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  getHisoryHandler: () => void;
};

export default function InputDate(props: TProps) {
  return (
    <div className="w-[800px] h-[100px] bg-[#F6F7F9] flex flex-row items-center justify-center gap-8 mt-5 ">
      <p className="font-[600] text-[20px] ">기간 : </p>
      <input
        type="date"
        value={props.startDate}
        onChange={(e) => {
          props.setStartDate(e.target.value);
          console.log(e.target.value);
        }}
        className=" h-[45px] px-2 border-[#DDDDDD] border-[1px]"
      />
      <p>~</p>
      <input
        type="date"
        value={props.endDate}
        onChange={(e) => props.setEndDate(e.target.value)}
        className=" h-[45px] px-2 border-[#DDDDDD] border-[1px]"
      />
      <button
        className=" rounded-[5px] w-[75px] text-[20px] font-[600] h-[45px] bg-[#FF0000] text-white"
        onClick={props.getHisoryHandler}
      >
        검색
      </button>
    </div>
  );
}
