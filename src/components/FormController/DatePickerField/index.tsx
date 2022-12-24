import { FormControl, Typography } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { InputCommonProps } from '../models';
import DateField from './DateField';

const DatePickerField = <T extends FieldValues>(props: InputCommonProps<T>) => {
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
              sx={{ marginBottom: 1, width: 'fit-content' }}
              className={classNameLabel}
            >
              {label}
            </Typography>
          )}
          <DateField
            {...rest}
            {...field}
            errorMessage={error?.message}
            onDateChange={date => {
              field.onChange(date);
              extendOnChange?.(date);
            }}
          />
          {error?.message && <ErrorMessage message={error.message} />}
        </FormControl>
      )}
    />
  );
};

export default DatePickerField;
