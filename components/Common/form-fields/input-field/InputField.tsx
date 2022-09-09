// libs
import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
// others
import styles from './InputField.module.css';

export interface InputFieldProps {
  control: any;
  name: any;
  defaultValue?: any;
  width?: String;
  height?: String;
  errors: any;
  placeholder?: any;
  disabled?: any;
}

export const InputField = ({
  control,
  errors,
  name,
  defaultValue,
  width,
  height,
  placeholder,
  disabled,
}: InputFieldProps) => {
  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!hasError}
          helperText={errors[name]?.message}
          defaultValue={defaultValue}
          placeholder={placeholder}
          style={{ width: `${width}`, height: `${height}` }}
          disabled={disabled}
          inputProps={{
            autoComplete: 'off',
          }}
          autoComplete="chrome-off"
        />
      )}
    />
  );
};
