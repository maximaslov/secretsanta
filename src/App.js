import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainProvider } from "contexts";
import { DynamicDocumentTitle, MainLayout } from "components";
import { IntlProvider } from "react-intl";
import { useLanguage } from "contexts/languageContext";
import { Loader } from "ui";
import { BeginPage, CreateCompany } from "pages";

//mockapi.io
//e-mail: secretsanta2023app@gmail.com
//password: SecretSanta2023App

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const { currentLanguage, translations } = useLanguage();

  setTimeout(() => {
    setShowLoader(false);
  }, 3000);

  if (showLoader) return <Loader />;

  return (
    <BrowserRouter>
      <IntlProvider locale={currentLanguage} messages={translations}>
        <MainProvider>
          <DynamicDocumentTitle />
          <MainLayout>
            <Routes>
              <Route exact path="/" element={<BeginPage />} />
              <Route path="/create-company" element={<CreateCompany />} />
              {/* <Route path="/create-company" element={<CreateCompany />} /> */}
              {/* <Route path="" element={<CurrentCompany />} /> */}
              {/* <Route path="" element={<Result />} /> */}
              {/* <Route path="/instuction" element={<Instruction />}/>  */}
              {/* <Route path="/developer" element={<Developer />}/>  */}
              {/* <Route path="/support-ukraine" element={<MonobankPage />}/>  */}
            </Routes>
          </MainLayout>
        </MainProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
