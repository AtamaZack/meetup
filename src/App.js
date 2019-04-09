import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Meetups from './meetups/meetups'
import Meetup from './meetup/meetup'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/meetups" component={Meetups} />
          <Route path="/meetup" component={Meetup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
