import "./Container.css";
import Link from "./Link.jsx";

const Container = () => {
  return (
    <div className="buttons-box">
      <Link href="https://github.com/Tranzitivnost" text={"GitHub"} />
      <Link href="https://rs.linkedin.com/" text={"LinkedIn"} />
      <Link href="https://www.instagram.com/" text={"Instagram"} />
    </div>
  );
};

export default Container;
