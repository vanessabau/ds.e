import React from "react";
import { Spacing } from "@ds.e/foundation";
interface Color {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<Color>;
export default Color;
