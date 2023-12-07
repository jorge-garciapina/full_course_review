import React from "react";
import { Section } from "./types";

import Button from "@mui/material/Button";

interface ReviewSectionProps {
  sections: Section[];
  formData: { [key: string]: string | boolean };
  onEditAnswers: () => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  sections,
  formData,
  onEditAnswers,
}) => {
  return (
    <div>
      <h2>Review Your Answers</h2>
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.subtitle}</h3>
          {section.fields.map((field) => (
            <p key={field.name}>
              <strong>{field.label}:</strong>{" "}
              {formData[field.name]?.toString() || "Not answered"}
            </p>
          ))}
        </div>
      ))}
      <Button variant="contained" color="secondary" onClick={onEditAnswers}>
        Edit Answers
      </Button>
    </div>
  );
};

export default ReviewSection;
