import { Link } from "react-router-dom";

const Rink = (props) => {
  return (
    <Link className={props.className} to={props.to}>
      {props.str}
    </Link>
  );
};

export default Rink;
