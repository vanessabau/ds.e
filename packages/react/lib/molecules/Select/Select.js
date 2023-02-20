import React, { useState, useRef, useEffect } from 'react';

const Select = ({ options = [], label = "Please select an option", onOptionSelected, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const handleOptionSelected = (option, optionIndex) => {
        setIsOpen((prev) => !prev);
        onOptionSelected?.(option, optionIndex);
    };
    const onLabelClick = () => {
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement("span", null, label),
            React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, index) => {
            return (React.createElement("li", { key: option.value, onClick: () => {
                    handleOptionSelected(option, index);
                } }, option.label));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
