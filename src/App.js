import "./App.css";
import UserComponent from "./component/userComponent";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

class App extends React.Component {
  handleChange = (event) => {
    console.log(event.target.value);
    this.props.setCurrentUser(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button onClick={() => this.handleChange}>Click</button>
        <UserComponent />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
