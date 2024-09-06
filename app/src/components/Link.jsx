import "./Link.css";

const Link = ({ href, children, target }) => {
  return (
    <a href={href} className="decoration" target={target}>
      {children}
    </a>
  );
};

export default Link;
