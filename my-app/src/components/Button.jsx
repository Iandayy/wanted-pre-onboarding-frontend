const Button = (props) => {
  return (
    <button
      className={`${props.className} bg-[#8e9aaf] text-white text-sm hover:bg-[#231942] rounded p-2`}
      onClick={props.onClick}
    >
      {props.str}
    </button>
  );
};

export default Button;
