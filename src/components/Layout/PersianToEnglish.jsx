import { useEffect, useState } from "react";

const usePersianToEnglish = (persianText) => {
  const [convertedText, setConvertedText] = useState({
    date: "",
  });
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

  useEffect(() => {
    const date = persianText ? convertPersianToEnglish(persianText) : "";
    setConvertedText({ date });
  }, [persianText]);

  return convertedText;
};

export default usePersianToEnglish;
