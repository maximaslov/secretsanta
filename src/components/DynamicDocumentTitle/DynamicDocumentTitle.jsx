import { useAppContext } from "contexts";
import { useEffect } from "react";

const DynamicDocumentTitle = () => {
  const { currentLanguage } = useAppContext();
  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "Secret Santa";
    } else {
      document.title = "Санта";
    }
  }, [currentLanguage]);
  return <></>;
};

export default DynamicDocumentTitle;
