import "./Header.css";

const Header = ({ size = "xl", color = "white", text }) => {
  return <h2 className={`color-${color} text-${size}`}>{text}</h2>;
};

export default Header;
