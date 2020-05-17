import React, { Component } from 'react';
import './App.css';
import DataList from './main/DataList';
class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <h1>React HTTP/GET</h1>
        <DataList />
      </div>
    )
  }
}

export default App
