import { categoryItems, congestionItems } from "@/types/congestion";
import FloatingItem from "./FloatingItem";

type FloatingListProps = {
  isCongestion: boolean;
  checkedItems: { [key: string]: boolean };
  toggleCheck: (label: string | number) => void;
};

const FloatingList = ({
  isCongestion,
  checkedItems,
  toggleCheck,
}: FloatingListProps) => {
  const items = isCongestion ? congestionItems : categoryItems;
  return (
    <ul className="space-y-2 pb-3">
      {items.map((item, index) => (
        <FloatingItem
          key={index}
          src={item.src}
          alt={item.alt}
          label={item.label}
          color={item.color}
          checked={checkedItems[item.label]}
          onChange={() => toggleCheck(item.label)}
          isCongestion={isCongestion}
        />
      ))}
    </ul>
  );
};

export default FloatingList;
