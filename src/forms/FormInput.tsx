import React, { type JSX } from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";

type ForwardRefComponent<P> = (
  props: P & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element;

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
}

export const FormInput = React.forwardRef(function FormInputInner<
  T extends FieldValues
>(
  {
    name,
    control,
    label,
    placeholder,
    type = "text",
    multiline = false,
    rows = 4,
    required = false,
    disabled = false,
    variant = "outlined",
  }: FormInputProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          ref={ref}
          label={label}
          placeholder={placeholder}
          type={type}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          variant={variant}
          fullWidth
          required={required}
          disabled={disabled}
          error={!!error}
          helperText={error?.message}
          margin="normal"
          size="small"
        />
      )}
    />
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as ForwardRefComponent<FormInputProps<any>>;

interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  required?: boolean;
  disabled?: boolean;
}

export const FormCheckbox = React.forwardRef(function FormCheckboxInner<
  T extends FieldValues
>(
  {
    name,
    control,
    label,
    required = false,
    disabled = false,
  }: FormCheckboxProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box ref={ref} sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(field.value)}
                onChange={(e) => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                inputRef={field.ref}
                disabled={disabled}
              />
            }
            label={
              <Typography variant="body2">
                {label}
                {required && <span style={{ color: "#d32f2f" }}>*</span>}
              </Typography>
            }
          />
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </Box>
      )}
    />
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as ForwardRefComponent<FormCheckboxProps<any>>;

interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: Array<{ value: string | number; label: string }>;
  required?: boolean;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
}

export const FormSelect = React.forwardRef(function FormSelectInner<
  T extends FieldValues
>(
  {
    name,
    control,
    label,
    options,
    required = false,
    disabled = false,
    variant = "outlined",
  }: FormSelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          ref={ref}
          fullWidth
          error={!!error}
          margin="normal"
          size="small"
          variant={variant}
        >
          {label && <InputLabel required={required}>{label}</InputLabel>}
          <Select
            {...field}
            label={label}
            variant={variant}
            required={required}
            disabled={disabled}
            
          >
            <MenuItem value="">
              <em>Select {label?.toLowerCase() || "option"}</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as ForwardRefComponent<FormSelectProps<any>>;
