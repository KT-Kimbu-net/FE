import { useState } from "react";

const useCheckboxState = (initialItems: any[]) => {
  // 초기화, 모든 체크박스를 체크
  const [checkedItems, setCheckedItems] = useState(
    initialItems.reduce((acc, item) => ({ ...acc, [item.label]: true }), {})
  );

  const toggleCheck = (label: string | number) => {
    setCheckedItems((prev: { [x: string]: any }) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return [checkedItems, toggleCheck];
};

export default useCheckboxState;
