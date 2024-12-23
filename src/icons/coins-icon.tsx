import { IconPropsType } from '.';

export const CoinSwapIcon = ({ width = 22, height = 22, color = '#475467' }: IconPropsType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 5L7 3M7 3L5 1M7 3H5C2.79086 3 1 4.79086 1 7M17 17L15 19M15 19L17 21M15 19H17C19.2091 19 21 17.2091 21 15M12.4172 12.4172C13.1994 12.7908 14.0753 13 15 13C18.3137 13 21 10.3137 21 7C21 3.68629 18.3137 1 15 1C11.6863 1 9 3.68629 9 7C9 7.92472 9.20919 8.80057 9.58283 9.58283M13 15C13 18.3137 10.3137 21 7 21C3.68629 21 1 18.3137 1 15C1 11.6863 3.68629 9 7 9C10.3137 9 13 11.6863 13 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
