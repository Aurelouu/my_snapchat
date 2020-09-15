import React from 'react';
import './App.css';
import Home from "./containers/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Post from "./containers/Post";
import About from "./containers/About";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Profile from "./containers/Profile";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Hero />
              <Route path="/" exact component={Home}/>
              <Route path="/post/:postid" component={Post}/>
              <Route path="/about" component={About}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/>
          </div>
      </Router>

  );
}

export default App;
