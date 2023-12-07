import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Field } from "./types"; // Adjust the import path as necessary

interface FormFieldProps {
  field: Field;
  value: string | boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
    case "number":
      return (
        <TextField
          label={field.label}
          type={field.type}
          name={field.name}
          value={(value as string) || ""}
          onChange={onChange}
          margin="normal"
          fullWidth
        />
      );
    case "boolean":
      return (
        <FormControlLabel
          control={
            <Checkbox checked={!!value} onChange={onChange} name={field.name} />
          }
          label={field.label}
        />
      );
    default:
      return null;
  }
};

export default FormField;
