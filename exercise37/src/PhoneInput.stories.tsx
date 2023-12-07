// src/PhoneInput.stories.tsx
import React from "react";
import PhoneInput from "./PhoneInput";

export default {
  title: "Phone Input",
  component: PhoneInput,
};

export const Default = () => <PhoneInput onChange={console.log} />;
