export type NavbarItemPropsType = {
    text: string;
    isOpen?: boolean;
    handleClickNavItem?: () => void;
    show?: boolean;
    child?:boolean
  };
  export type NavbarItemMobilePropsType = {
    list: NavItemType[];
    openIndex?: number;
    toggleHamburger:() => void;
     hamburgerOpen: boolean;
    // setOpenIndex: Dispatch<SetStateAction<number | undefined>>;
    // setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  };
  import { Dispatch, SetStateAction } from 'react';


export type NavSubPropsType = {
  subMenus: SubMenuType[];
  subNavTop: string;
};

export type SubMenuType = { title: string; href: string; icon?: JSX.Element; hiddenLanguages?: string[]; img?: string };


export type NavItemType = {
  title: string;
  show?: boolean;
  mobileSubmenu?:mobileSubmenuProps[]
};
type mobileSubmenuProps = {
  title:string
  href:string
}

export type HamburgerPropsType = {
  toggleHamburger: () => void;
  hamburgerOpen: boolean;
};
