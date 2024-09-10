export const getClassNames = classNamesMapping => {
  const result = [];

  for (const [className, value] of Object.entries(classNamesMapping)) {
    if (value) {
      result.push(className);
    }
  }

  return result.join(" ").trim();
};
