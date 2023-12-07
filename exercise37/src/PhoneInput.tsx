import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { formatPhoneNumber, isValidPhoneNumber } from "./phoneNumberUtils";

interface PhoneInputProps {
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const unformattedNumber = event.target.value.replace(/\D/g, "");
    setValue(formatPhoneNumber(unformattedNumber));
  };

  useEffect(() => {
    setError(value ? !isValidPhoneNumber(value) : false);
  }, [value]);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <TextField
      error={error}
      helperText={error ? "Invalid phone number" : ""}
      value={value}
      onChange={handleChange}
      placeholder="Enter phone number"
      fullWidth
    />
  );
};

export default PhoneInput;
