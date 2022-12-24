import { FormControl, Typography } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { InputCommonProps, SelectCommonProps } from '../models';
import SelectField from './SelectField';

const InputSelectField = <T extends FieldValues>(
  props: InputCommonProps<T> & SelectCommonProps
) => {
  const {
    control,
    name,
    label,
    classNameLabel,
    extendOnChange,
    options,
    ...rest
  } = props;
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
          <SelectField
            {...rest}
            {...field}
            onSelectChange={obj => {
              field.onChange(obj);
              extendOnChange?.(obj);
            }}
            errorMessage={error?.message}
            options={options}
          />
          {error?.message && <ErrorMessage message={error.message} />}
        </FormControl>
      )}
    />
  );
};

export default InputSelectField;
