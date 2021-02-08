import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/userSelector";
import { createStructuredSelector } from "reselect";

const userComponent = ({ currentUser }) => <label>{currentUser}</label>;

//Before using selector
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

// export default connect(mapStateToProps)(userComponent);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(userComponent);
