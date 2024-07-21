type FloatingToggleProps = {
  isCongestion: boolean;
  handleToggle: () => void;
};

export default function FloatingToggle({
  isCongestion,
  handleToggle,
}: FloatingToggleProps) {
  return (
    <div className="pt-1 px-2 pb-5 text-base">
      <button
        className={`tracking-wider border border-slate-500 border-opacity-50 px-4 py-2 rounded-tl-3xl rounded-bl-3xl focus:outline-none transition-colors duration-500 ${
          isCongestion ? "bg-slate-500 text-white" : "bg-white text-slate-500"
        }`}
        onClick={() => {
          if (!isCongestion) handleToggle();
        }}
      >
        혼잡도
      </button>
      <button
        className={`px-4 py-2 border border-slate-500 border-opacity-50 rounded-tr-3xl rounded-br-3xl focus:outline-none transition-colors duration-500 ${
          isCongestion ? "bg-white text-slate-500" : "bg-slate-500 text-white"
        }`}
        onClick={() => {
          if (isCongestion) handleToggle();
        }}
      >
        카테고리
      </button>
    </div>
  );
}
