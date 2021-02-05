import { connect } from "react-redux";

const userComponent = ({ currentUser }) => <label>{currentUser}</label>;

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(userComponent);
