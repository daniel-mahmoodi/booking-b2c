import React from "react";

const PersianToEnglish = ({ persianText }) => {
  // Function to replace Persian numerals with English numerals
  const convertPersianToEnglish = (text) => {
    // Define a mapping of Persian to English numerals
    const persianToEnglishMap = {
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    };

    // Use a regular expression to match and replace Persian numerals
    return text.replace(/[۰-۹]/g, (match) => persianToEnglishMap[match]);
  };

  const englishText = persianText&&convertPersianToEnglish(persianText);

  return (
    <div>
      <p>Persian Text: {persianText}</p>
      <p>English Text: {englishText}</p>
    </div>
  );
};

export default PersianToEnglish;
