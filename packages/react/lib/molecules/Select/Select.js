import React, { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = "Please select an option", onOptionSelected,
//renderOption,
 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const handleOptionSelected = (option, optionIndex) => {
        setIsOpen((prev) => !prev);
        onOptionSelected?.(option, optionIndex);
        setSelectedIndex(optionIndex);
        console.log(selectedIndex);
    };
    const onLabelClick = () => {
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, index) => {
            const isSelected = index === selectedIndex;
            // const renderOptionProps = {
            //   option,
            //   isSelected,
            //   getOptionRecommendedProps: (overrideProps = {}) => {
            //     return {
            //       className: `dse-select__option ${
            //         isSelected ? "dse-select__option--selected" : ""
            //       }`,
            //       key: option.value,
            //        onClick: handleOptionSelected(option, index),
            //       ...overrideProps,
            //     };
            //   },
            // };
            // if (renderOption) {
            //   return renderOption(renderOptionProps);
            // }
            return (React.createElement("li", { className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""}`, key: option.value, onClick: () => {
                    handleOptionSelected(option, index);
                } },
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { width: "1rem", height: "1rem", fill: "none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))) : null));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
