import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Login from './Login';
import ScrapHeader from './ScrapHeader';
import Welcome from './Welcome';
import Register from './Register';

class App extends React.Component {
  // shouldComponentUpdate(nextProps) {
  // this.props === nextProps
  // }
  // handle
  // main() {
  //   //mount
  //   this.componentWillMount()
  //   this.componentDidMount()
  //   this.render();
  //   //update cycle
  //   this.componentWillReceiveProps();
  //   this.componentWillUpdate();
  //   this.render()
  //   this.componentDidUpdate();
  // }
  constructor(props) {
    super(props);
    this.state = {
      add: 0,
      register: 0
    };
  }
  handlelogout = () => {
    this.setState({ add: 0 });
  }
  render() {
    return (

      <div className="App">
        <ScrapHeader handle={this.handlelogout}></ScrapHeader>
        {this.state.add ?      <Route path='/signin' component={Welcome}/> :
          <Login handleClick={this.handleSubmit} handleRegister={this.handleRegister}></Login>
        }
                {this.state.register ? <Register register={this.state.register} /> :
          <Login handleClick={this.handleSubmit} handleRegister={this.handleRegister}></Login>
        }

      </div>
    );
  }
  handleRegister =(x) =>{
    this.setState({
      register : x
    });
  }
  handleSubmit = (user) => {
    this.setState({
      add: user,
    });
  }
}

export default App;
