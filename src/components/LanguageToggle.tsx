
import { useState } from "react";

interface LanguageToggleProps {
  onChange?: (language: "ar" | "lt") => void;
}

const LanguageToggle = ({ onChange }: LanguageToggleProps) => {
  const [language, setLanguage] = useState<"ar" | "lt">("ar");
  
  const toggleLanguage = () => {
    const newLang = language === "ar" ? "lt" : "ar";
    setLanguage(newLang);
    if (onChange) {
      onChange(newLang);
    }
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="bg-white text-amazigh-dark px-3 py-1 rounded-full border border-amazigh-dark hover:bg-amazigh-light transition-colors"
    >
      {language === "ar" ? "العربية" : "Tamaziɣt"}
    </button>
  );
};

export default LanguageToggle;
