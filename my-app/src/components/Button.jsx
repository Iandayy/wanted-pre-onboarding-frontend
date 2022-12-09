const Button = (props) => {
  return (
    <button
      className={`${props.className} bg-purple-800 text-white hover:bg-purple-500 rounded p-2`}
      onClick={props.onClick}
    >
      {props.str}
    </button>
  );
};

export default Button;
