import { useStateContext } from "../Context/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  text,
  borderRadius,
  size,
}) => {

  const { currentColor } = useStateContext();

  return (
    <button
      type="button"
      style={{
        backgroundColor: currentColor,
        color: color || "#fff",
        borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;