import React, { forwardRef } from 'react';
import { sprinkles, type Sprinkles } from '../../theme/sprinkles.css';

export interface BoxProps extends Sprinkles {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, as: Component = 'div', className, style, ...sprinkleProps }, ref) => {
    const sprinkleStyles = sprinkles(sprinkleProps);
    const combinedClassName = [sprinkleStyles, className].filter(Boolean).join(' ');

    const elementProps = {
      className: combinedClassName,
      style,
      children,
    };

    if (Component === 'div') {
      return <div ref={ref} {...elementProps} />;
    }

    // For other elements, create without ref for now
    return React.createElement(Component, elementProps);
  }
);

Box.displayName = 'Box';
