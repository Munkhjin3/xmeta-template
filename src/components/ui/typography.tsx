import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

const typographyStyles = cva('', {
  variants: {
    variant: {
      title: 'lg:text-3xl xl:text-5xl 2xl:text-7xl text-2xl text-black dark:text-white font-semibold',
      heading2: 'lg:text-2xl xl:text-3xl text-xl text-black dark:text-white font-semibold',
      heading3: 'lg:text-xl xl:text-2xl text-lg text-black dark:text-white font-semibold',
      desc: 'text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500'
    }
  },
  defaultVariants: {
    variant: 'desc'
  }
});

type TypographyProps = VariantProps<typeof typographyStyles> & {
  children: ReactNode;
  className?: string;
};

export const Typography = forwardRef<HTMLHeadingElement | HTMLParagraphElement, TypographyProps>(
  ({ variant = 'desc', children, className = '', ...props }, ref) => {
    let Component: keyof JSX.IntrinsicElements = 'p';

    if (variant === 'title') {
      Component = 'h1';
    } else if (variant === 'heading2') {
      Component = 'h2';
    }
    return (
      <Component ref={ref} className={clsx(typographyStyles({ variant }), className)} {...props}>
        { children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
