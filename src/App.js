import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/news/:id' children={<Articles />}></Route>
          <Route path='/search/:value' children={<SearchResult />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
