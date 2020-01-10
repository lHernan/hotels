import React, { Component }from "react";
import Hotels from './Hotels.js';

class HotelHome extends Component {
  state = {
    hotels: [{'name': 'hotel a', 'id': 123}, {'name': 'hotel b', 'id': 456}]
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
      <Hotels hotels={this.state.hotels} />
    );
  }
}

export default HotelHome;
