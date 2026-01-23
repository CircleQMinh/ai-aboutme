import type { InferType } from "yup";
import * as yup from "yup";

export const sampleFormSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "You must be at least 18")
    .required("Age is required"),
  category: yup
    .string()
    .required("Category is required")
    .oneOf(
      ["electronics", "clothing", "books", "food", "other"],
      "Invalid category"
    ),
  agreeToTerms: yup
    .boolean()
    .required()
    .oneOf([true], "You must accept the terms"),
});

export type SampleFormValues = InferType<typeof sampleFormSchema>;
