import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { NumberFormatProps } from '../models';

const NumberFormat = React.forwardRef(
  (props: NumberFormatProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      name,
      value,
      disabled,
      onNumberChange,
      prefix,
      errorMessage,
      ...rest
    } = props;
    return (
      <NumericFormat
        {...rest}
        id={`form-test-${name}`}
        allowLeadingZeros={false}
        autoComplete='off'
        value={value}
        customInput={TextField}
        disabled={disabled}
        inputRef={ref}
        onValueChange={<T extends NumberFormatValues>(data: T) => {
          onNumberChange(data.floatValue);
        }}
        thousandSeparator
        InputProps={{
          startAdornment: prefix && (
            <InputAdornment position='start'>{prefix}</InputAdornment>
          ),
        }}
        error={Boolean(errorMessage)}
      />
    );
  }
);

export default NumberFormat;
