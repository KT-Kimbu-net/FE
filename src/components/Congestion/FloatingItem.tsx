import Image from "next/image";
import { TItem } from "./FloatingList";
interface FloatingItemProps extends TItem {
  isCongestion: boolean;
}

export default function FloatingItem({
  src,
  alt,
  label,
  isCongestion,
  color,
}: FloatingItemProps): JSX.Element {
  return (
    <li className="flex items-center justify-center gap-x-5 pr-2 text-base text-gray-600 tracking-wider">
      <input type="checkbox" className="form-checkbox h-5 w-5" />
      {!isCongestion ? (
        <Image src={src} alt={alt} className="w-8 h-8" />
      ) : (
        <svg
          className={`w-8 h-8 ${color}`}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 4c2.2 0 4 1.8 4 4c0 2.1-2.1 5.5-4 7.9c-1.9-2.5-4-5.8-4-7.9c0-2.2 1.8-4 4-4m0-2C8.7 2 6 4.7 6 8c0 4.5 6 11 6 11s6-6.6 6-11c0-3.3-2.7-6-6-6m0 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m8 13c0 2.2-3.6 4-8 4s-8-1.8-8-4c0-1.3 1.2-2.4 3.1-3.2l.6.9c-1 .5-1.7 1.1-1.7 1.8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9c2 .8 3.2 1.9 3.2 3.2"
          />
        </svg>
      )}
      <span>{label}</span>
    </li>
  );
}
