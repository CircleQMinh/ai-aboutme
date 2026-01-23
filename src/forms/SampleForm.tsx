import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { sampleFormSchema, type SampleFormValues } from "./schemas/sampleFormSchema";
import { Box, Button } from "@mui/material";
import { FormInput, FormCheckbox, FormSelect } from "./FormInput";

const CATEGORY_OPTIONS = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'books', label: 'Books' },
  { value: 'food', label: 'Food' },
  { value: 'other', label: 'Other' },
]

export function SampleForm() {
  const { control, handleSubmit, reset, formState  } = useForm<SampleFormValues>({
    resolver: yupResolver(sampleFormSchema),
    mode: "onBlur",
    defaultValues: {
      age: 18,
      agreeToTerms: true,
      email: "",
      password: ""
    },
  });

  const onSubmit = async (data: SampleFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("[v0] Form Data:", data);

      reset();
    } catch (error) {
      console.error("[v0] Error submitting form:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 420,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <FormInput
        name="email"
        control={control}
        label="Email"
        placeholder="Enter your email"
        required
      />

      <FormInput
        name="password"
        control={control}
        label="Password"
        type="password"
        required
      />

      <FormInput
        name="age"
        control={control}
        label="Age"
        type="number"
        required
      />
      <FormSelect
        name="category"
        control={control}
        label="Category"
        options={CATEGORY_OPTIONS}
        required
      />

      <FormCheckbox
        name="agreeToTerms"
        control={control}
        label="I agree to the terms and conditions"
        required
      />

      <Button
        type="submit"
        variant="contained"
        disabled={formState.isSubmitting}
        sx={{ mt: 1 }}
      >
        Submit
      </Button>
    </Box>
  );
}
