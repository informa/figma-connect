import React from 'react';
import { Heading } from '../Heading/Heading';
import { Box } from '../Box/Box';
import { card, cardVariants } from './Card.css';

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card variant */
  variant?: 'default' | 'elevated' | 'flat';
  /** Additional CSS class */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Card title, a string */
  title?: string;
  /** Card actions, an array of Button components */
  actions?: React.ReactNode[];
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  onClick,
  title,
  actions,
  ...props
}) => {
  const classes = [
    card,
    cardVariants[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Box
      className={classes}
      onClick={onClick}
      display="flex"
      flexDirection="column"
      gap={4}
      paddingTop={10}
      paddingBottom={12}
      paddingLeft={8}
      paddingRight={8}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      {title && <Heading level='h3'>{title}</Heading>}
      {children}
      {actions && <Box display="flex" gap={4} marginTop={4}>{actions}</Box>}
    </Box>
  );
};