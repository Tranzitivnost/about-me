import "./Link.css";

const Link = ({ href, text }) => {
  return (
    <a href={href} className="button" target="_blank">
      {text}
    </a>
  );
};

export default Link;
