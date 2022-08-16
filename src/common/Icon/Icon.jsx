import Patterns from "./patterns";

const Icon = ({ name, size, color }) => {
  const Pattern = Patterns[name];

  return (
    <svg
      width={size || Pattern.Size}
      height={size || Pattern.Size}
      fill={color || "#000"}
      color={color || "#000"}
      viewBox={Pattern.ViewBox}
    >
      <Pattern />
    </svg>
  );
};

export default Icon;
