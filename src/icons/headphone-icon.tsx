import { IconPropsType } from ".";


export const HeadphonesIcon = ({ width = 24, height = 24  ,color="#344054"}: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="headphones-02">
        <path
          id="Icon"
          d="M18.3337 14.1667V10.8333C18.3337 6.23096 14.6027 2.5 10.0003 2.5C5.39795 2.5 1.66699 6.23096 1.66699 10.8333V14.1667M6.25033 17.5C5.09973 17.5 4.16699 16.5673 4.16699 15.4167V12.9167C4.16699 11.7661 5.09973 10.8333 6.25033 10.8333C7.40092 10.8333 8.33366 11.7661 8.33366 12.9167V15.4167C8.33366 16.5673 7.40092 17.5 6.25033 17.5ZM13.7503 17.5C12.5997 17.5 11.667 16.5673 11.667 15.4167V12.9167C11.667 11.7661 12.5997 10.8333 13.7503 10.8333C14.9009 10.8333 15.8337 11.7661 15.8337 12.9167V15.4167C15.8337 16.5673 14.9009 17.5 13.7503 17.5Z"
          stroke={color}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
