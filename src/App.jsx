import React, { Component } from 'react';
import Axios from 'axios';

// App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Axios
      .get('https://launchlibrary.net/1.2/rocket')
      .then((response) => {
        response.data.rockets.map((obj) => {
          this.setState({
            data: this.state.data.concat(obj)
          })
        })
      })
    console.log(this.state.data)
  }

  render() {
    return (
      <div className="container">
      <h1>Rockets !!!!!</h1>
          {
            this.state.data.map((obj, index) => {
              return (
              <div className="row" key={index}>

                  <div className="col-md-3">{obj.id}</div>
                  <div className="col-md-3">{obj.name}</div>
                  <div className="col-md-3">{obj.configuration}</div>
                  <div className="col-md-3">{obj.defaultPads}</div>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default App;
