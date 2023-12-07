import React from "react";
import FormField from "./FormField";
import { Field } from "./types";

interface Section {
  subtitle: string;
  fields: Field[];
}

interface FormSectionProps {
  section: Section;
  formData: { [key: string]: string | boolean };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({
  section,
  formData,
  handleChange,
}) => {
  return (
    <div>
      <h3>{section.subtitle}</h3>
      {section.fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default FormSection;
