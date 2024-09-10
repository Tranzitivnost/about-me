import "./Container.css";

const getClassNames = classNamesMapping => {
  const result = [];

  for (const [className, value] of Object.entries(classNamesMapping)) {
    if (value) {
      result.push(className);
    }
  }

  return result.join(" ").trim();
};

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
    <div className={`${className} ${getClassNames(classNamesMapping)}`}>
      {children}
    </div>
  );
};

export default Container;
