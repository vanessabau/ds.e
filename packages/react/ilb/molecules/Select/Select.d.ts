import React from "react";
interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    onOptionSelected?(option: any, optionIndex: number): void;
    options?: SelectOption[];
    label?: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
