import React, { forwardRef } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { textarea, textareaError, textareaContainer, textareaWrapper } from './TextArea.css';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** TextArea label */
  label?: string;
  /** Error message to display */
  errorMessage?: string;
  /** Additional CSS class for the textarea element */
  className?: string;
  /** Additional CSS class for the container */
  containerClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      errorMessage,
      className,
      containerClassName,
      id,
      ...textareaProps
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const isError = !!errorMessage;

    return (
      <Box className={[textareaContainer, containerClassName].filter(Boolean).join(' ')}>
        {label && (
          <label htmlFor={textareaId}>
            <Text type="paragraph" color="default">
              {label}
            </Text>
          </label>
        )}
        
        <Box className={textareaWrapper}>
          <textarea
            ref={ref}
            id={textareaId}
            className={[
              textarea,
              isError ? textareaError : '',
              className,
            ].filter(Boolean).join(' ')}
            {...textareaProps}
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

TextArea.displayName = 'TextArea';