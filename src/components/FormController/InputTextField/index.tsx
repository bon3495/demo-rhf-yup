import { FormControl, Typography } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { InputCommonProps } from '../models';
import InputText from './InputText';

const InputTextField = <T extends FieldValues>(props: InputCommonProps<T>) => {
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
          <InputText
            errorMessage={error?.message}
            {...rest}
            {...field}
            onInputChange={(value: string) => {
              field.onChange(value);
              extendOnChange?.(value);
            }}
          />
          {error?.message && <ErrorMessage message={error.message} />}
        </FormControl>
      )}
    />
  );
};

export default InputTextField;
