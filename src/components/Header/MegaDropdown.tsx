import { Menu } from "@/data/Header/menus";
import Link from "next/link";

type MegaDropdownProps = {
  menus: Menu[];
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

export default function MegaDropdown({
  menus,
  handleMouseEnter,
  handleMouseLeave,
}: MegaDropdownProps) {
  return (
    <>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-full w-full bg-white shadow-lg z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full m-auto">
          <div className="flex justify-center py-4">
            {menus.map((submenu, index) => (
              <ul className="text-center w-28 flex flex-col" key={index}>
                {submenu.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="py-1">
                    <Link href={item.link}>
                      <div className="text-black hover:bg-gray-200 block py-1">
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
