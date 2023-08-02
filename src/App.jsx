import React from "react";

import { createReact } from "react-dom/client";

const App = () => {
  return <h1>Hi</h1>;
};

const container = document.getElementById("root");
const root = createReact(container);
root.render(<App />);
