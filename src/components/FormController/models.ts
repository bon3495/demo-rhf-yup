import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { ActionMeta } from 'react-select';

export interface InputCommonProps<FormValuesProps extends FieldValues> {
  name: FieldPath<FormValuesProps>;
  control: Control<FormValuesProps>;
  placeholder?: string;
  label?: string;
  extendOnChange?: (value: any) => void;
  disabled?: boolean;
  className?: string;
  classNameLabel?: string;
  prefix?: string;
}

export interface SelectCommonProps {
  options: SelectObjProps[] | [];
}

export interface InputProps {
  errorMessage?: string | undefined;
  placeholder?: string;
  disabled?: boolean;
  name: string;
}

export interface InputTextProps extends InputProps {
  multiline?: boolean;
  value?: string;
  onInputChange: (value: string) => void;
}

export interface NumberFormatProps extends InputProps {
  onNumberChange: (value: number | undefined) => void;
  value?: string;
  prefix?: string;
}

export interface SelectFieldProps extends InputProps {
  isMulti?: boolean;
  onSelectChange: (
    option: SelectObjProps | null | readonly SelectObjProps[],
    actionMeta: ActionMeta<SelectObjProps>
  ) => void;
  value: SelectObjProps;
  isClearable?: boolean;
  options: SelectObjProps[] | [];
}

export interface SelectObjProps {
  label: string;
  value: string;
}

export interface DatePickerProps extends InputProps {
  value: Date;
  onDateChange: (date: Date) => void;
}
