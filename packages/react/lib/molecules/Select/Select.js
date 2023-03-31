import React, { useState, useRef, useEffect, createRef } from 'react';
import Text from '../../atoms/Text/Text.js';

const getNextOptionIndex = (currentIndex, options) => {
    console.log(currentIndex);
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return options.length - 1;
    }
    if (currentIndex === 0) {
        return 0;
    }
    return currentIndex - 1;
};
const Select = ({ options = [], label = "Please select an option", onOptionSelected,
//renderOption,
 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const labelRef = useRef(null);
    const [optionRefs, setOptionRefs] = useState([]);
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
    const highlightOption = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        console.log(event);
        // space is not working
        if (event.key === "Enter" ||
            event.key === "Space" ||
            event.key === "ArrowDown")
            setIsOpen(true);
        // Set focus on list item
        highlightOption(0);
    };
    useEffect(() => {
        setOptionRefs(options.map((_) => createRef()));
    }, [options.length]);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    const onOptionKeyDown = (event) => {
        console.log(event);
        if (event.key === "Escape") {
            setIsOpen(false);
            return;
        }
        if (event.key === "ArrowDown") {
            highlightOption(getNextOptionIndex(highlightedIndex, options));
        }
        if (event.key === "ArrowUp") {
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        }
        if (event.key === "Enter") {
            handleOptionSelected(options[highlightedIndex], highlightedIndex);
        }
    };
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick(), "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": "dse-select-list", onKeyDown: onButtonKeyDown },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen && (React.createElement("ul", { id: "dse-select-list", role: "menu", style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, index) => {
            // selectedIndex is the same as optionIndex
            const isSelected = index === selectedIndex;
            const isHighlighted = highlightedIndex === selectedIndex;
            const ref = optionRefs[index];
            // const renderOptionProps = {
            //   option,
            //   isSelected,
            //   getOptionRecommendedProps: (overrideProps = {}) => {
            //     return {
            //       ref,
            //       onKeyDown: onOptionKeyDown,
            //       tabIndex: isHighlighted ? -1 : 0,
            //       onMouseEnter: () => highlightOption(selectedIndex),
            //       onMouseLeave: () => highlightOption(null),
            //       className: `dse-select__option
            //      ${isSelected ? "dse-select__option--selected" : ""}
            //      ${isHighlighted ? "dse-select__option--highlighted" : ""}`,
            //       key: option.value,
            //       onClick: handleOptionSelected(option, index),
            //       ...overrideProps,
            //     };
            //   },
            // };
            // if (renderOption) {
            //   return renderOption(renderOptionProps);
            // }
            return (React.createElement("li", { ref: ref, role: "menuitemradio", "aria-label": option.label, "aria-checked": isSelected ? true : undefined, className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""}`, key: option.value, onClick: () => {
                    handleOptionSelected(option, index);
                }, onKeyDown: onOptionKeyDown, tabIndex: isHighlighted ? -1 : 0, onMouseEnter: () => highlightOption(selectedIndex), onMouseLeave: () => highlightOption(null) },
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { width: "1rem", height: "1rem", fill: "none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))) : null));
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
