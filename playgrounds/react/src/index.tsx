import React from "react";
import { createRoot } from "react-dom/client";

import { Select } from "@ds.e/react";
import { Button, Color } from "@ds.e/react";

// import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/global.css";
//import "@ds.e/scss/lib/button-new.css";

const rootContainer = document.querySelector("#root") as Element;
const root = createRoot(rootContainer);

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
];

root.render(
  <div>
    <Color hexCode="#000" width="1rem" height="1rem" />
    <Button label="hello" />
    <Select options={options} />
    <p style={{ color: "red" }}>this is some text</p>
  </div>
);

// import React from "react";
// import ReactDOM from "react-dom";

// import Button from "@ds.e/react";
// import "@ds.e/scss/lib/Button.css";

// ReactDOM.render(
//   <Button label="Example Button"></Button>,
//   document.querySelector("#root")
// );
