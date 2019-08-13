import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from './Logo/ScrapBook.jpg';
import Register from './Register';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: null,
      register: ""
    };
  }
  change = e => {
    this.setState({ userName: e.target.value });
  }
  handleClick = e => {
    this.props.handleClick(this.state.userName);
  }

  handleRegister = (e) => {
    this.setState({ register: 1 });
    this.props.handleRegister(this.state.register);
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} alt="scrap" width="1800px" height="300px" />
          <form>
            <p>
              <label> Username : </label>
              <input type="text" onChange={this.change} placeholder="Enter ur Name"></input> <br></br>
              <label> Password  : </label>
              <input></input>
            </p>

            <button onClick={this.handleClick}> Sign In </button>


            <button onClick={this.handleRegister}> Register 
                      
                        </button>
                        {/* {this.state.register ? <Register /> : ""} */}

          </form>
        </header>


      </div>
    );
  }
}

export default Login;