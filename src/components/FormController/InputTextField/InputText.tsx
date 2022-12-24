import { TextField } from '@mui/material';
import React from 'react';
import { InputTextProps } from '../models';

const InputText = React.forwardRef(
  (props: InputTextProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      multiline,
      errorMessage,
      onInputChange,
      value,
      name,
      disabled,
      placeholder,
      ...rest
    } = props;
    return (
      <TextField
        {...rest}
        id={`form-test-${name}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onInputChange(e.target.value)
        }
        disabled={disabled}
        placeholder={placeholder}
        multiline={multiline}
        error={Boolean(errorMessage)}
        autoComplete='off'
        inputRef={ref}
      />
    );
  }
);

export default InputText;
