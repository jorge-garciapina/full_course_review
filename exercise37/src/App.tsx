import React from "react";
import PhoneInput from "./PhoneInput";

function App() {
  const handlePhoneInputChange = (phone: string) => {
    console.log("Phone Number:", phone);
  };

  return (
    <div className="App">
      <h1>Phone Number Input Example</h1>
      <PhoneInput onChange={handlePhoneInputChange} />
    </div>
  );
}

export default App;
