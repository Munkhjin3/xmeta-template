
import { HamburgerIcon, XCloseIcon } from '@/icons';
import { Button } from '../ui';
import { HamburgerPropsType } from './type';


export const Hamburger = ({ toggleHamburger, hamburgerOpen }: HamburgerPropsType) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="flex justify-center px-2 md:hidden"
      aria-label="hamburger menu"
      onClick={toggleHamburger}
    >
      {hamburgerOpen && <XCloseIcon />}
      {!hamburgerOpen && <HamburgerIcon />}
    </Button>
  );
};
