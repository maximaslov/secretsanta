import React, { useState } from "react";
import "./App.css";
import { LanguageProvider, MainProvider } from "contexts";
import { DynamicDocumentTitle } from "components";
import { Loader } from "ui";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 3000);

  if (showLoader) return <Loader />;

  return (
    <MainProvider>
      <LanguageProvider>
        <DynamicDocumentTitle />
        <div
          style={{
            display: "flex",
            gap: "40px",
            width: "900px",
            margin: "100px auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </LanguageProvider>
    </MainProvider>
  );
}

export default App;
