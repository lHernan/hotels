
    import React, { Component } from 'react'
    import Hotels from './components/Hotels.js';
    import HotelDetail from './components/HotelDetail.js';
    import HotelHome from './components/HotelHome.js';
    import Map from './components/Map.js';

    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link,
      useRouteMatch,
      useParams
    } from "react-router-dom";


    class App extends Component {
      state = {
        hotels: [{'name': 'hotel a', 'id': 1}, {'name': 'hotel b', 'id': 2}, {'name': 'hotel c', 'id': 3}]
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
