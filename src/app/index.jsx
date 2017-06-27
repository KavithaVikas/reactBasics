import React from 'react';
import {render} from 'react-dom'

class App extends React.Component {
  render () {
    return <p> Welcome To React Kavitha!!</p>;
  }
}

render(<App/>, document.getElementById('app'));