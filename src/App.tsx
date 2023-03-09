import { MantineProvider } from "@mantine/core";
import { useState } from "react";

import "./App.css";
import Header from "./layouts/MainLayout/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider
      theme={{ fontFamily: "Open Sans" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="flex flex-col w-full h-full">
        <Header></Header>
      </div>
    </MantineProvider>
  );
}

export default App;
