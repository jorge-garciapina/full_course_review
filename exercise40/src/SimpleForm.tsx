import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useSpring, animated } from "react-spring";
import formSchema from "./formSchema.json";

type FormData = {
  [key: string]: string | boolean;
};

interface Field {
  type: string;
  required: boolean;
  name: string;
  label: string | string[];
  default: any;
  value: any;
}

const SimpleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  useEffect(() => {
    const initialData = formSchema.Sections.flatMap((section) =>
      section.fields.map((field) => ({ [field.name]: field.default || "" }))
    ).reduce((acc, cur) => ({ ...acc, ...cur }), {});
    setFormData(initialData);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const isCurrentSectionValid = () => {
    return formSchema.Sections[currentSectionIndex].fields.every((field) => {
      if (!field.required) return true;
      const value = formData[field.name];
      if (field.type === "boolean") {
        return value === true;
      } else {
        return typeof value === "string" && value.trim() !== "";
      }
    });
  };

  const handleNextSection = () => {
    if (isCurrentSectionValid()) {
      if (currentSectionIndex === formSchema.Sections.length - 1) {
        setShowReview(true);
      } else {
        setCurrentSectionIndex((current) => current + 1);
      }
    } else {
      alert("Please fill in all required fields in this section.");
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((current) => current - 1);
    }
  };

  const handleEditAnswers = () => {
    setShowReview(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (showReview && isCurrentSectionValid()) {
      console.log(formData);
      alert("Form submitted");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const renderField = (field: Field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <TextField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={(formData[field.name] as string) || ""}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        );
      case "boolean":
        return (
          <FormControlLabel
            key={field.name}
            control={
              <Checkbox
                checked={!!formData[field.name]}
                onChange={handleChange}
                name={field.name}
              />
            }
            label={field.label}
          />
        );
      default:
        return null;
    }
  };

  const renderReviewSection = () => {
    return (
      <div>
        <h2>Review Your Answers</h2>
        {formSchema.Sections.map((section, index) => (
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
        <Button variant="contained" onClick={handleEditAnswers}>
          Edit Answers
        </Button>
      </div>
    );
  };

  return (
    <animated.form style={fade} onSubmit={handleSubmit}>
      {!showReview ? (
        <>
          <h2>{formSchema.Sections[currentSectionIndex].subtitle}</h2>
          {formSchema.Sections[currentSectionIndex].fields.map(renderField)}
          <div>
            {currentSectionIndex > 0 && (
              <Button variant="contained" onClick={handlePreviousSection}>
                Previous
              </Button>
            )}
            {currentSectionIndex < formSchema.Sections.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextSection}
                disabled={!isCurrentSectionValid()}
              >
                Next
              </Button>
            )}
            {currentSectionIndex === formSchema.Sections.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextSection}
                disabled={!isCurrentSectionValid()}
              >
                Review Answers
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          {renderReviewSection()}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </>
      )}
    </animated.form>
  );
};

export default SimpleForm;

////////////////////////////////////////////////////////////////////////////////////////////
