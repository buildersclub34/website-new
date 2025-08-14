import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "./lib/utils";

const neopopButtonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap text-base font-semibold tracking-wider uppercase transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'neopop-btn neopop-primary',
        secondary: 'neopop-btn neopop-secondary',
      },
      size: {
        default: 'px-8 py-3 text-lg',
        sm: 'px-6 py-2 text-base',
        lg: 'px-10 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & 
  VariantProps<typeof neopopButtonVariants>;

type AnchorProps = {
  asChild?: boolean;
  href: string;
  target?: string;
  rel?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & 
  VariantProps<typeof neopopButtonVariants>;

type NeopopButtonProps = ButtonProps | AnchorProps;

const isAnchor = (props: NeopopButtonProps): props is AnchorProps => {
  return 'href' in props && props.href !== undefined;
};

const NeopopButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  NeopopButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : isAnchor(props) ? 'a' : 'button';
  
  return (
    <Comp
      className={cn(neopopButtonVariants({ variant, size, className }))}
      ref={ref as any}
      {...(props as any)}
    />
  );
});

NeopopButton.displayName = 'NeopopButton';

export { NeopopButton, neopopButtonVariants };
