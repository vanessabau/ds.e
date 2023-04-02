import React from "react";

import Color from "./Color";

// css
import "@ds.e/scss/lib/Utilities.css";

export default {
  title: "Atoms | Color",
  component: Color,
  args: {
    hexCode: "pink",
    height: ["xl"],
    width: ["xl"],
  },
};

export const Template = (args: JSX.IntrinsicAttributes & Color) => (
  <Color {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};

Playground.parameters = {
  design: {
    controls: { exclude: ["Reset"] },
  },
};

// export const CustomDimensions = () => (
//   <Color hexCode="pink" width="xxl" height="xxl" />
// );
