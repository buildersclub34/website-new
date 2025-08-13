'use client';

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

type ButtonSize = 'sm' | 'default' | 'lg';
type ButtonVariant = 'primary' | 'secondary';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

interface ButtonAsButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: 'button';
  href?: never;
}

interface ButtonAsLinkProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as: 'link';
  href: string;
}

type NeoPopButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const NeoPopButton: React.FC<NeoPopButtonProps> = ({
  as = 'button',
  variant = 'primary',
  size = 'default',
  className,
  children,
  fullWidth = false,
  disabled = false,
  ...props
}) => {
  const baseClasses = cn(
    'relative inline-flex items-center justify-center',
    'font-bold text-center uppercase tracking-wider whitespace-nowrap',
    'border-2 rounded transition-all duration-150 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'will-change-transform min-w-fit',
    'hover:-translate-y-0.5 hover:translate-x-0.5',
    'active:translate-x-0 active:translate-y-0 active:shadow-none',
    'transform -translate-x-1 -translate-y-1',
    'border-b-4 border-r-4', // Enhanced 3D border effect
    {
      // Primary variant - Original yellow colors
      'bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017]': 
        variant === 'primary',
      // Secondary variant - Original outline
      'bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017]': 
        variant === 'secondary',
      // Sizes
      'px-5 py-1.5 text-sm': size === 'sm',
      'px-6 py-2 text-base': size === 'default',
      'px-8 py-3 text-lg': size === 'lg',
      // Full width
      'w-full': fullWidth,
      'inline-flex': !fullWidth,
    },
    className
  );

  // Enhanced 3D shadow effect with original colors
  const shadowClasses = variant === 'primary' 
    ? 'shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none'
    : 'shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none';

  if (as === 'link') {
    const { href, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link
        href={href}
        className={`${baseClasses} ${shadowClasses}`}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button
      type={buttonProps.type || 'button'}
      disabled={disabled}
      className={`${baseClasses} ${shadowClasses}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default NeoPopButton;
