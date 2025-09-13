const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  ariaLabel,
  disabled = false,
  type = "button",
  ...props
}) => {
  const handleKeyDown = (event) => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel || children}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
