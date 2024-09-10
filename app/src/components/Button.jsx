import "./Button.css";

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
};
export default Button;
