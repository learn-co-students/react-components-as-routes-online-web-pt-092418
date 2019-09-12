import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
// import Home from './home'
// import About from './about'
// import Login from './login'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
};

const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
  </div>;

const Home = () => <div><h1>Home!</h1></div>;
const About = () => <div><h1>This is my about component!</h1></div>;
const Login = () =>
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username"/>
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="text" name="password" placeholder="Password"/>
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login"/>
  </form>

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar/>
      <Route exact path="/" render={Home}/>
      <Route exact path="/login" render={Login}/>
      <Route exact path="/about" render={About}/>
    </React.Fragment>
  </Router>,

  document.getElementById('root')
);
