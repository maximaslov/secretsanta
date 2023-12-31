import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainProvider } from "contexts";
import { DynamicDocumentTitle, MainLayout } from "components";
import { IntlProvider } from "react-intl";
import { useLanguage } from "contexts/languageContext";
import { Loader } from "ui";
import { BeginPage, CreateCompany, Result } from "pages";
import CompanyLogin from "pages/CompanyLogin";

//mockapi.io
//e-mail: secretsanta2024app@gmail.com
//password: SecretSanta2024App

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
       <Route path="/company-result" element={<Result />} />
       <Route path="/company-login" element={<CompanyLogin />} />
      </Routes>
     </MainLayout>
    </MainProvider>
   </IntlProvider>
  </BrowserRouter>
 );
}

export default App;
