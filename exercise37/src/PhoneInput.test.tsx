import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhoneInput from "./PhoneInput";

describe("PhoneInput Component", () => {
  test("formats US phone numbers correctly", () => {
    render(<PhoneInput onChange={() => {}} />);
    const input = screen.getByPlaceholderText(
      "Enter phone number"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1234567890" } });
    expect(input.value).toBe("(123) 456-7890");
  });

  test("shows error for invalid US phone number", () => {
    render(<PhoneInput onChange={() => {}} />);
    const input = screen.getByPlaceholderText(
      "Enter phone number"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "123" } });
    const helperText = screen.getByText("Invalid phone number");
    expect(helperText).toBeInTheDocument();
  });

  test("does not show error for valid US phone number", () => {
    render(<PhoneInput onChange={() => {}} />);
    const input = screen.getByPlaceholderText(
      "Enter phone number"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1234567890" } });
    const helperText = screen.queryByText("Invalid phone number");
    expect(helperText).not.toBeInTheDocument();
  });
});
