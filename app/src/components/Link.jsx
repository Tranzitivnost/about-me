import "./Link.css";

const Link = ({ href, children, target, className }) => {
  return (
    <a href={href} className={`width ${className}`} target={target}>
      {children}
    </a>
  );
};

export default Link;
