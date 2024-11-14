import React from "react";

const Button = ({
  label,
  onClick,
  disabled = false,
  style = {},
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="primary-button"
      style={style}
    >
      {loading ? <span>Loading...</span> : label}
    </button>
  );
};

export default Button;
