import { FormControl, Typography } from '@mui/material';
import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { InputCommonProps } from '../models';
import NumberFormat from './NumberFormat';

const NumberFormatField = <T extends FieldValues>(
  props: InputCommonProps<T>
) => {
  const { control, name, label, classNameLabel, extendOnChange, ...rest } =
    props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          {label && (
            <Typography
              component='label'
              htmlFor={`form-test-${name}`}
              sx={{ marginBottom: 1 }}
              className={classNameLabel}
            >
              {label}
            </Typography>
          )}
          <NumberFormat
            {...rest}
            {...field}
            onNumberChange={(value: number | undefined) => {
              field.onChange(value);
              extendOnChange?.(value);
            }}
            errorMessage={error?.message}
          />
          {error?.message && <ErrorMessage message={error.message} />}
        </FormControl>
      )}
    />
  );
};

export default NumberFormatField;
