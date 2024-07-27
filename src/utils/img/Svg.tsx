export const SvgQuizProblemLoading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="15"
        strokeDashoffset="15"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 3C16.9706 3 21 7.02944 21 12"
        fillRule="evenodd"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.3s"
          values="15;0"
        />
        <animateTransform
          attributeName="transform"
          dur="1.5s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
  );
};
export const SvgAlertExitAlert = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"
          fillRule="evenodd"
        />
      </svg>
    </>
  );
};
export const SvgQuizResultCheck = () => {
  return (
    <>
      <svg
        className="h-10 w-10"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <rect width="18" height="18" x="3" y="3" rx="4" />
          <path d="m9 12l2.25 2L15 10" fillRule="evenodd" />
        </g>
      </svg>
    </>
  );
};
export const SvgQuizLoadingLoading = () => {
  return (
    <>
      <svg
        className="w-16 h-16 mt-5"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;90 12 12;180 12 12;270 12 12"
          />
          <animate
            attributeName="opacity"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.2s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="30 12 12;120 12 12;210 12 12;300 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.2s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
        <circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
          <animateTransform
            attributeName="transform"
            begin="0.4s"
            calcMode="discrete"
            dur="2.4s"
            repeatCount="indefinite"
            type="rotate"
            values="60 12 12;150 12 12;240 12 12;330 12 12"
          />
          <animate
            attributeName="opacity"
            begin="0.4s"
            dur="0.6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="1;1;0"
          />
        </circle>
      </svg>
    </>
  );
};
