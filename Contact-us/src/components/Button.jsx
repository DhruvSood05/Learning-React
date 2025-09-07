import { MdMessage } from "react-icons/md";

const Button = (props) => {
  const { variant = "black", icon, text } = props;

  // Set classes based on variant
  const baseClasses =
    "w-[220px] h-[44px] rounded-[5px] px-4 py-2.5 flex items-center justify-center gap-2 cursor-pointer";
  const variantClasses =
    variant === "white"
      ? "bg-white text-black border border-solid border-black w-full"
      : "bg-black text-white";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {icon}
      {text}
    </button>
  );
  // return (
  //   <button className=" w-[220px] h-[44px] rounded-[5px] px-4 py-2.5 bg-black text-white flex items-center justify-center gap-2">
  //     {props.icon}
  //     {props.text}
  //   </button>
  // );
};

export default Button;
