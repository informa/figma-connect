import React from 'react';
import { heading, headingLevels, headingVariants } from './Heading.css';

export interface HeadingProps {
  /** Heading content */
  children: React.ReactNode;
  /** Heading level */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Heading variant */
  variant?: 'default' | 'primary' | 'secondary' | 'muted';
  /** Additional CSS class */
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h1',
  variant = 'default',
  className,
  ...props
}) => {
  const Component = level;
  
  const classes = [
    heading,
    headingLevels[level],
    headingVariants[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
