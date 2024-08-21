import "./SocialMediaButtons.css";
import { Children } from "react";

const SocialMediaButtons = ({ children }) => {
  return (
    <div className="buttons-box">
      {Children.map(children, child => (
        <button className="button">{child}</button>
      ))}
      <button className="button">GitHub</button>
      <button className="button">Linkedln</button>
      <button className="button">Instagram</button>
    </div>
  );
};
const vdom = <SocialMediaButtons>some text</SocialMediaButtons>;
export default SocialMediaButtons;
