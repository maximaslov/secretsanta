import { useAppContext } from "contexts";
import { useEffect } from "react";
// import { useAppContext } from "../../contexts/appContext";

const DynamicDocumentTitle = () => {
  const { currentLanguage } = useAppContext();
  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "Secret Santa";
    } else {
      document.title = "Санта";
    }
  }, [currentLanguage]);
  return <div />;
};

export default DynamicDocumentTitle;
