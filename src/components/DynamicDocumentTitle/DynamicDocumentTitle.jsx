import { useLanguage } from "contexts/languageContext";
import { useEffect } from "react";

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
