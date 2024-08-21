import "./Text.css";

const Text = ({ size = "m", color = "red" }) => {
  return (
    <div className="article-section">
      <h2 className="name">Valentina Savitskaia</h2>
      <h2 className={`color-${color} text-${size}`}>Serbia, Belgrade</h2>
      <h2 className="name profession">Front-end developer.</h2>
    </div>
  );
};

export default Text;
