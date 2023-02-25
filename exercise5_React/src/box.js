import Vote from "./button";

function Box(props) {
  return (
    <div className="food">
      <img src={props.pic} width="300px" id="foodImg" alt=""></img>
      <h2 id="foodHead">{props.type}</h2>
      <h3 id="foodMenu">{props.menu}</h3>
      <p id="foodDetail">{props.detail}</p>
      <Vote />
    </div>
  );
}

export default Box;
