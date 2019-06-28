import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path= "/" render={Home} />
      <Route exact path="/about" render={About} />
    </React.Fragment>
  </Router>
),
  document.getElementById('root')
);
