import { IconPropsType } from '.';

export const XCloseIcon = ({ width = 24, height = 24, color = '#475467' }: IconPropsType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.7682 6.3125L5.71875 17.3619M5.71875 6.3125L16.7682 17.3619"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
