import { THistory } from "./Credit";

export default function CreditContent(props: THistory) {
  return (
    <tr className="border-[#EEEEEE] border-y-[1px] h-[50px] font-[300]">
      <th className="font-[400]">{props.date}</th>
      <th className="font-[400]">{props.content}</th>
      {props.deleteDate && <th className="font-[400]">{props.deleteDate}</th>}
      <th className="font-[400]">{props.amount}</th>
    </tr>
  );
}
