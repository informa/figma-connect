import React from 'react';
import { heading, headingLevels, paragraph, textColors } from './Text.css';

export interface TextProps {
  /** Text content */
  children: React.ReactNode;
  /** Text type */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph';
  /** Text color */
  color?: 'default' | 'neutral' | 'danger';
  /** Additional CSS class */
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  type = 'paragraph',
  color = 'default',
  className,
  ...props
}) => {
  const Component = type === 'paragraph' ? 'p' : type;
  
  const classes = [
    type === 'paragraph' ? paragraph : heading,
    type !== 'paragraph' ? headingLevels[type as keyof typeof headingLevels] : undefined,
    textColors[color],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Backward compatibility alias for Heading
export interface HeadingProps {
  /** Heading content */
  children: React.ReactNode;
  /** Heading level */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Text color */
  color?: 'default' | 'neutral' | 'danger';
  /** Additional CSS class */
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h1',
  color = 'default',
  className,
  ...props
}) => {
  return (
    <Text type={level} color={color} className={className} {...props}>
      {children}
    </Text>
  );
};
