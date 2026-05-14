import React from 'react';
import type { ButtonProps } from '../Button';
import { Text } from '../Text/Text';
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
  /** Footer actions — use one or more `<Button />` elements */
  actions?: Array<React.ReactElement<ButtonProps>>;
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
      {title && <Text type='h3'>{title}</Text>}
      {children}
      {actions && actions.length > 0 && (
        <Box display="flex" flexWrap="wrap" gap={4} marginTop={4}>
          {actions.map((action, index) =>
            React.cloneElement(action, {
              key: action.key ?? `card-action-${index}`,
            }),
          )}
        </Box>
      )}
    </Box>
  );
};