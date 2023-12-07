export const formatPhoneNumber = (input: string): string => {
  // Remove all non-numeric characters
  input = input.replace(/\D/g, "");

  // Format: (123) 456-7890
  if (input.length >= 10) {
    return input
      .substring(0, 10)
      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

  return input;
};

export const isValidPhoneNumber = (input: string): boolean => {
  // US phone number validation
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(input);
};
