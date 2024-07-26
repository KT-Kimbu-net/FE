import { TSideMenu, TSideMenuContent } from "@/data/sideMenu/dataPlayer";
import Link from "next/link";

const marginClasses = ["ml-0", "ml-2", "ml-4", "ml-6", "ml-8", "ml-10"];

export default function SideMenu(props: TSideMenu) {
  const selectStyle = "font-[500] text-[#EC1C23]";

  const renderMenuItems = (menus: TSideMenuContent[], depth = 1) => {
    return menus.map((menu) => (
      <li
        className="flex flex-col items-start justify-start gap-2 text-[14px] xl:text-[16px] 2xl:text-[16px]"
        key={`${menu.keyword}-${depth}`}
      >
        <Link
          prefetch={false}
          href={menu.menuUrl}
          className={`w-full ${marginClasses[depth]} ${
            menu.keyword === props.params && selectStyle
          }
            ${depth === 1 && "font-[500]"}
          `}
        >
          - {menu.menuName}
        </Link>
        <ul>{menu.childs && <>{renderMenuItems(menu.childs, depth + 1)}</>}</ul>
      </li>
    ));
  };

  return (
    <div className="fixed md:top-[16.5em] md:text-[16px] xl:top-[18.5em] 2xl:top-[20em]  right-[85%]  max-h-[500px] md:right-[81%] 2xl:right-[85%] md:w-[160px] xl:w-[180px] 2xl:w-[190px] border-[2px] border-[#CCCCCC] rounded-[10px] items-center flex-col justify-start p-3 pl-1 hidden lg:flex ">
      <h4 className="w-[90%] font-[700]   border-b-[1px] pb-2 text-left text-[20px] xl:text-[24px] 2xl:text-[28px]">
        {props.title}
      </h4>
      <ul className="w-[90%] font-[300] mt-2 flex flex-col items-start justify-start gap-2 text-[12px]">
        {renderMenuItems(props.menuList)}
      </ul>
    </div>
  );
}
