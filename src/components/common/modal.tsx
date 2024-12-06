'use client';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import { ReactNode } from 'react';
interface ModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  rightSideContent?: ReactNode;
  className?: string;
  defaultPadding?: boolean;
  containerClassname?: string;
  onWheel?: (e: React.WheelEvent) => void;
  closeActive?: boolean;
  overlayClass?: string;
  icon:JSX.Element
}

export const Modal: React.FC<ModalProps> = ({
    icon,
  description = '',
  isOpen,
  onClose,
  children,
  className,
  defaultPadding = true,
  containerClassname = '',
  onWheel,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent
          className={cn('flex h-screen flex-col !p-0 sm:grid sm:h-auto', className)}
          onWheel={onWheel}
        >
          <DialogHeader className="flex h-fit w-full flex-row items-center justify-between border-gray-200 px-6 pt-6">
            <div className='w-full'>
              <div className="flex items-center justify-between gap-2 ">
                <div className='border p-2 rounded-xl'>
                    {icon}
                </div>
                  <DialogClose>
                    <XIcon />
                  </DialogClose>
              </div>
              <DialogDescription>{description}</DialogDescription>
            </div>
          </DialogHeader>
          <div className={cn('overflow-auto', defaultPadding && `px-6 py-4`, containerClassname)}>{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
