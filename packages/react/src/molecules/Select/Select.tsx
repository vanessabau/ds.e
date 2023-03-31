import React, { useEffect, useRef, useState } from "react";
import Text from "../../atoms/Text";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?(option: any, optionIndex: number): void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = "Please select an option",
  onOptionSelected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  const handleOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen((prev) => !prev);
    onOptionSelected?.(option, optionIndex);
    setSelectedIndex(optionIndex);
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

  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLabelClick()}
      >
        <Text>{selectedOption === null ? label : selectedOption.label}</Text>
        <svg
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
          width="1rem"
          height="1rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            return (
              <li
                className={`dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`}
                key={option.value}
                onClick={() => {
                  handleOptionSelected(option, index);
                }}
              >
                <Text>{option.label}</Text>
                {isSelected ? (
                  <svg
                    width="1rem"
                    height="1rem"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
