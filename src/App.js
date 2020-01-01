import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      items = [],
      isloaded = false,
    }
  }

    //---- Used to call the api ----//
    componentDidMount () {

      //---- Fetch the data ----//
      fetch ('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())

        //---- Put API information via setSate ----//
        .then(json => {
          this.setState({
            items = json,
            isloaded = true
          })
        })

    }
  
  render () {
    return (
      <div className='App'>


      </div>
    )
  }
}

export default App;
