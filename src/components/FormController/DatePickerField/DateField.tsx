import React from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerProps } from '../models';
import './style.css';

const DateField = React.forwardRef(
  (props: DatePickerProps, ref: React.ForwardedRef<any>) => {
    const {
      name,
      disabled,
      errorMessage,
      placeholder,
      value,
      onDateChange,
      ...rest
    } = props;
    return (
      <DatePicker
        {...rest}
        id={`form-test-${name}`}
        disabled={disabled}
        placeholderText={placeholder}
        selected={value}
        ref={ref}
        onChange={onDateChange}
        className={`input ${errorMessage ? 'error' : ''}`}
      />
    );
  }
);

export default DateField;
