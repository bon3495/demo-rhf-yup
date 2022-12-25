import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { InputCommonProps } from '../models';

const CheckboxField = <T extends FieldValues>(props: InputCommonProps<T>) => {
  // return
  const { control, name, label, classNameLabel, extendOnChange, ...rest } =
    props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ref, onChange } }) => (
        <FormControlLabel
          {...rest}
          label={label}
          control={
            <Checkbox
              checked={value}
              inputRef={ref}
              onChange={e => {
                onChange(e.target.checked);
                extendOnChange?.(e.target.checked);
              }}
            />
          }
        />
      )}
    />
  );
};

export default CheckboxField;
