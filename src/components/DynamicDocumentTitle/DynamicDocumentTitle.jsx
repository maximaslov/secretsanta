import { useEffect } from "react";
import {useAppContext} from '../../context/appContext'

const DynamicDocumentTitle = () => {
  const { currentLanguage } = useAppContext();

  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "Secret Santa";
    } else {
      document.title = "Таємний Санта";
    }
  }, [currentLanguage]);
  return <div />;
};

export default DynamicDocumentTitle;
