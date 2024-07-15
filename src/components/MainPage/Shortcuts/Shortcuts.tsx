import { shortcutsDummyData } from "@/data/shortcuts/shortcuts";
import ShortcutList from "./ShortcutList";

export default function Shortcuts() {
  return (
    <ul className="w-2/3 flex justify-between gap-5">
      {shortcutsDummyData.map((shortcut, index) => (
        <ShortcutList
          shortcutImage={shortcut.shortcutImage}
          title={shortcut.title}
          key={index}
        />
      ))}
    </ul>
  );
}
