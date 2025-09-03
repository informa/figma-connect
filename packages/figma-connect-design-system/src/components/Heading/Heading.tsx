import React from 'react';
import { heading, headingLevels } from './Heading.css';

export interface HeadingProps {
  /** Heading content */
  children: React.ReactNode;
  /** Heading level */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS class */
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h1',
  className,
  ...props
}) => {
  const Component = level;
  
  const classes = [
    heading,
    headingLevels[level],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
