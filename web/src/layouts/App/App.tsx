import { MantineProvider } from "@mantine/core";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { TestsView } from "../TestsView/TestsView";

function App() {
  return (
    <MantineProvider withCSSVariables withNormalizeCSS withGlobalStyles>
      <div className="w-full h-full grid grid-rows-[60px_1fr]">
        <Header />
        <div className="w-full h-full max-w-screen-xl mx-auto py-2">
          <Routes>
            <Route path="/" element={<TestsView />} />
          </Routes>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
