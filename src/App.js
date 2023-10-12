import React, { useState } from "react";
import "./App.css";
import { MainProvider } from "contexts";
import { DynamicDocumentTitle, MainLayout } from "components";
import {
  Button,
  Checkbox,
  // Error,
  Heading,
  Input,
  Loader,
  Paper,
  Text,
} from "ui";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useLanguage } from "contexts/languageContext";

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
    <IntlProvider locale={currentLanguage} messages={translations}>
      <MainProvider>
        <DynamicDocumentTitle />
        <MainLayout>
          <div
            style={{
              maxWidth: "900px",
              width: "100%",
              margin: "100px auto",
              padding: "16px",
            }}
          >
            <Paper>
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Heading>
                  <FormattedMessage id="test.title" />
                </Heading>
                <Text>Subtitle</Text>
                <Text variant="md">Description</Text>
                <Input placeholder="Placeholder" />
                <Checkbox labelText="Check me" />
                <Button>Create new company</Button>
              </div>
            </Paper>
          </div>
        </MainLayout>
      </MainProvider>
    </IntlProvider>
  );
}

export default App;
