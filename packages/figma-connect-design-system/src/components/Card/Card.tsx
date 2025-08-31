import React from 'react';
import { card, cardVariants, cardPadding, cardHeader, cardContent, cardFooter } from './Card.css';

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card variant */
  variant?: 'default' | 'elevated' | 'flat';
  /** Card padding */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional CSS class */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface CardHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export interface CardContentProps {
  /** Content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export interface CardFooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'none',
  className,
  onClick,
  ...props
}) => {
  const classes = [
    card,
    cardVariants[variant],
    cardPadding[padding],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = [cardHeader, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = [cardContent, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = [cardFooter, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
