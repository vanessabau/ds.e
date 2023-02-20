import React from 'react';

const Button = ({ label }) => {
    return (React.createElement("button", { className: "dse-button__container" },
        "I am a ",
        label || "label"));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
