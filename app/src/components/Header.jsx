import "./Header.css";

const Header = ({ size = "xl", color = "white", children }) => {
  return <h2 className={`color-${color} text-${size}`}>{children}</h2>;
};

export default Header;
