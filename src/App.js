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
      fetch ('https://jsonplaceholder.typicode.com/users')
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

    let {isloaded, items} = this.state;

    if (!isloaded) {
      return <div>...Loading</div>
    }

    else {
      return (
      <div className='App'>
        <ul>
          {/* ---- .map function creates a new array for json to go in. Allows loop of each object ---- */}
          {items.map(item => {
            <li key = {item.id}>
              Name: {item.name}, Email: {item.email}
              
            </li> 
          })}
        </ul>

      </div>
    )
    }
    
  }
}

export default App;
