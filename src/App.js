import "./App.css";
import { DynamicDocumentTitle } from "./components";
import { LanguageProvider, MainProvider } from "./context";
import { Button } from "./ui";

function App() {
  return (
    <MainProvider>
      <LanguageProvider>
        <DynamicDocumentTitle />
        <div
          style={{
            display: "flex",
            gap: "40px",
            width: "500px",
            margin: "100px auto",
          }}
        >
          <Button disabled>Hello</Button>
          <Button onClick={() => console.log('click')}>Hello</Button>
          <Button variant="secondary">Hello</Button>
        </div>
      </LanguageProvider>
    </MainProvider>
  );
}

export default App;
