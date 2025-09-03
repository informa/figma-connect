import React from 'react';
import { button, buttonVariants, buttonSizes } from './Button.css';

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary';
  /** Button size */
  size?: 'small' | 'large';
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS class */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  const classes = [
    button,
    buttonVariants[variant],
    buttonSizes[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
