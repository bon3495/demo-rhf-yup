import React from 'react';
import Select from 'react-select';
import { SelectFieldProps } from '../models';

const SelectField = React.forwardRef(
  (props: SelectFieldProps, ref: React.ForwardedRef<any>) => {
    const {
      isMulti,
      errorMessage,
      name,
      onSelectChange,
      value,
      isClearable,
      options,
      ...rest
    } = props;

    const styles = {
      control: (provided: any) => {
        let borderColor = '#0000003b';
        let borderColorHover = '#000000de';
        if (errorMessage) {
          borderColor = '#d32f2f';
          borderColorHover = '#d32f2f';
        }
        return {
          ...provided,
          height: 58,
          border: `1px solid ${borderColor}`,
          boxShadow: 'none',
          '&:hover': {
            borderColor: borderColorHover,
            cursor: 'text',
          },
        };
      },
      valueContainer: (provided: any) => ({
        ...provided,
        paddingLeft: 14,
      }),
    };

    return (
      <Select
        {...rest}
        value={value}
        onChange={onSelectChange}
        menuPlacement='auto'
        isMulti={isMulti}
        id={`form-test-${name}`}
        instanceId={name}
        ref={ref}
        isClearable={isClearable}
        options={options}
        styles={styles}
      />
    );
  }
);

export default SelectField;
