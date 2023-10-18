import { useEffect } from "react";
import { useLanguage } from "contexts/languageContext";

const DynamicDocumentTitle = () => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "Secret Santa";
    } else {
      document.title = "Таємний Санта";
    }
  }, [currentLanguage]);
  return <></>;
};

export default DynamicDocumentTitle;
