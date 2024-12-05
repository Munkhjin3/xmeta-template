import { IconPropsType } from ".";


export const RepeatIcon = ({ width = 37, height = 37, color = '#F8F7FF' ,className }: IconPropsType) => {
  return (
    <svg
    className={className}
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="repeat-04" clipPath="url(#clip0_29793_1362)">
        <path
          id="Icon"
          d="M18.4998 31.6032C25.7366 31.6032 31.6032 25.7367 31.6032 18.4999C31.6032 14.1441 29.4779 10.2847 26.2077 7.90219M20.0414 34.5322L16.9583 31.4491L20.0414 28.3659M18.4998 5.39652C11.2631 5.39652 5.39648 11.2631 5.39648 18.4999C5.39648 22.8557 7.5218 26.715 10.792 29.0976M16.9583 8.63382L20.0414 5.55067L16.9583 2.46753"
          stroke={color}
          strokeWidth="3.08314"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29793_1362">
          <rect
            width="36.9977"
            height="36.9977"
            fill="white"
            transform="translate(0.000976562 0.00109863)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
