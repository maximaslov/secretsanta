import React from "react";
import "./App.css";
import { LanguageProvider, MainProvider } from "./contexts";
import { DynamicDocumentTitle } from "./components";
import { Button, Checkbox, Heading, Input, MenuItem, Text } from "./ui";

function App() {
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
          }}
        >
          <Input placeholder="Placeholder" />
          <Checkbox labelText="Click me">Hello</Checkbox>
          <Button>Hello</Button>
          <Button variant="secondary">Hello</Button>
          <Text>Hello</Text>
          <Text variant="md">Descriptions</Text>
          <Heading>Hello</Heading>
          <MenuItem label="Hello" />
        </div>
      </LanguageProvider>
    </MainProvider>
  );
}

export default App;
