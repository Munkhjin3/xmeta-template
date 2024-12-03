import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { XIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CustomSheetType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  className?: string;
  children: ReactNode;
  rightSideChildren?: ReactNode;
}

export const CustomSheet = ({ isOpen, setIsOpen, title, className, children, rightSideChildren }: CustomSheetType) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="!max-w-screen flex w-screen flex-col !p-0 md:!max-w-[50%]">
        <SheetHeader className="border-b border-gray-300  p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-full justify-end ">
              <SheetClose className="w-fit rounded-md border border-gray-300 p-1 shadow-sm">
                <XIcon width={20} height={20} />
              </SheetClose>
              <SheetTitle className={'text-lg font-bold'}>{title}</SheetTitle>
            </div>
            {rightSideChildren}
          </div>
        </SheetHeader>
        <div className={className}>{children}</div>
      </SheetContent>
    </Sheet>
  );
};
