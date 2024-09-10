import "./Container.css";
import { getClassNames } from "../helpers/getClassNames";

const Container = ({
  className,
  children,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
}) => {
  const classNamesMapping = {
    justifyStart,
    justifyCenter,
    justifyEnd,
    alignStart,
    alignCenter,
    alignEnd,
  };

  return (
    <div
      className={`container ${className} ${getClassNames(classNamesMapping)}`}
    >
      {children}
    </div>
  );
};

export default Container;
