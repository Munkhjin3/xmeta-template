import { IconPropsType } from ".";

export const MoonIcon = ({ width = 24, height = 24, color = '#344054' }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="moon-01" clipPath="url(#clip0_30087_808)">
        <path
          id="Icon"
          d="M18.3337 13.2035C17.2392 13.6985 16.0242 13.974 14.7449 13.974C9.92974 13.974 6.02629 10.0706 6.02629 5.25541C6.02629 3.97609 6.30183 2.76112 6.7968 1.66663C3.77179 3.03465 1.66699 6.07888 1.66699 9.6147C1.66699 14.4298 5.57044 18.3333 10.3856 18.3333C13.9214 18.3333 16.9656 16.2285 18.3337 13.2035Z"
          stroke={color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_30087_808">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
