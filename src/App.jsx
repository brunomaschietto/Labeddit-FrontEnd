import { useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const context = {};

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
