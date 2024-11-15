import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes} </h2>
      <button onClick={buyCake}>buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

CakeContainer.propTypes = {
  numOfCakes: PropTypes.number.isRequired,
  buyCake: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
