
    import React, { Component } from 'react'
    import Hotels from './components/Hotels.js';
    import Map from './components/Map.js';


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
          //<Hotels hotels={this.state.hotels} />
          <Map  />
        )
      }
    }
    export default App;
