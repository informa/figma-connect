import React, { forwardRef } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { input, inputError, inputContainer, inputWrapper } from './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Error message to display */
  errorMessage?: string;
  /** Additional CSS class for the input element */
  className?: string;
  /** Additional CSS class for the container */
  containerClassName?: string;
  /** Placeholder text for the input */
  placeHolder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      errorMessage,
      className,
      containerClassName,
      id,
      placeHolder,
      ...inputProps
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const isError = !!errorMessage;

    return (
      <Box className={[inputContainer, containerClassName].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={inputId}>
            <Text type="paragraph" color="default">
              {label}
            </Text>
          </label>
        )}
        
        <Box className={inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            placeholder={placeHolder}
            className={[
              input,
              isError ? inputError : '',
              className,
            ].filter(Boolean).join(' ')}
            {...inputProps}
          />
        </Box>
        
        {errorMessage && (
          <Text
            type="paragraph"
            color="danger"
            className="error-message"
          >
            {errorMessage}
          </Text>
        )}
      </Box>
    );
  }
);

Input.displayName = 'Input';