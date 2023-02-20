import React from "react";
import { FontSize } from "@ds.e/foundation";

interface TextProps {
  size?: keyof typeof FontSize;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size = FontSize.md, children }) => {
  const className = `dse-text-${size}`;
  return <div className={className}>{children}</div>;
};

export default Text;
