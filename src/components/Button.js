import ButtonStyle from "./ButtonStyle.module.css";
export default function Button(props) {
  const getPadding = () => {
    switch (props.size) {
      case "small":
        return "5px 10px";
      case "large":
        return "10px 30px";
      default:
        return "7px 15px";
    }
  };
  return (
    <button
      className={ButtonStyle.btn}
      style={{ background: props.color || "#cba", padding: getPadding() }}
      onClick={props.onClick}
    >
      {props.text}{" "}
    </button>
  );
}
Button.defaultProps={
        text:"View Profile",
        size:'medium',
        color: 'golden'

}
