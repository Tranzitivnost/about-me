import "./Link.css";

const Link = ({ href, children, target, className }) => {
  return (
    <a href={href} className={`linkComponent ${className}`} target={target}>
      {children}
    </a>
  );
};

export default Link;
