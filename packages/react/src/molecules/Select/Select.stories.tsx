import React from "react";
import Select from "./Select";

// css
import "@ds.e/scss/lib/Select.css";

// Group components by adding to the title
export default {
  title: "Molecules | Select",
  args: {
    options: [
      {
        label: "Strict Black",
        value: "strict-black",
      },
      {
        label: "Heavenly Green",
        value: "heavenly-green",
      },
      {
        label: "Sweet Pink",
        value: "pink",
      },
    ],
    label: "Please select a color",
  },
};

export const Common = (args: any) => <Select {...args} />;

// export const CustomLabel = () => (
//   <Select options={options} label="Select a Color" />
// );

// Provide Developer-helpful variants, look at the component interface to reflect variants

// export const RenderOption = () => (
//   <Select
//     options={options}
//     renderOption={({ getOptionRecommendedProps, option, isSelected }) => {
//       <span {...getOptionRecommendedProps}>
//         {option.label}
//         {isSelected ? "SELECTED!" : ""}
//       </span>;
//     }}
//   />
// );
