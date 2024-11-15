import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";

function HooksIcecreamContainer() {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Icecreams: {numOfIcecreams} </h2>
      <button onClick={() => dispatch(buyIcecream())}>buy icecream</button>
    </div>
  );
}

export default HooksIcecreamContainer;
