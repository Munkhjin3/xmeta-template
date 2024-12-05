
import { IconPropsType } from ".";

export const SunIcon = ({ width = 24, height = 24, color = 'white' }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="sun" clipPath="url(#clip0_29856_5548)">
        <path
          id="Icon"
          d="M10.0003 1.66675V3.33341M10.0003 16.6667V18.3334M3.33366 10.0001H1.66699M5.26209 5.26184L4.08358 4.08333M14.7386 5.26184L15.9171 4.08333M5.26209 14.7417L4.08358 15.9203M14.7386 14.7417L15.9171 15.9203M18.3337 10.0001H16.667M14.167 10.0001C14.167 12.3013 12.3015 14.1667 10.0003 14.1667C7.69914 14.1667 5.83366 12.3013 5.83366 10.0001C5.83366 7.6989 7.69914 5.83341 10.0003 5.83341C12.3015 5.83341 14.167 7.6989 14.167 10.0001Z"
          stroke={color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_29856_5548">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
