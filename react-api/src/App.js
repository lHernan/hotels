import React, { Component } from 'react'
import HotelDetail from './components/HotelDetail.js';
import HotelHome from './components/HotelHome.js';

  import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";


  class App extends Component {
    state = {
      hotels: []
    }
    componentDidMount() {
      fetch('http://localhost:5000/getAllHotels')
      .then(res => res.json())
      .then((data) => {
        this.setState({ hotels: data })
      })
      .catch(console.log)
    }
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={HotelHome} />
            <Route path="/hotel-detail/:hotelId" component={HotelDetail} />
          </div>
        </Router>
      );
    }
  }
  
  export default App;
