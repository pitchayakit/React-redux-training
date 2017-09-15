import React, { Component } from 'react'
import logo from './../logo.svg'
import './App.css'
import {connect} from "react-redux"


class App extends Component {

  
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.props.result}
        <button onClick={()=>this.props.add(15000)}>add</button>
      </div>
    );
  }
}

const mapStatetoProps=(state)=>{

  return {
    result:state.result
  }
}

const mapDispatchtoProps=(dispatch)=>{
  
  return {
    add: (value)=>{
      dispatch({
        type:"ADD",
        playload:value
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);