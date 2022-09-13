import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <>
        <Button variant="info" >Click Me </Button>
        <Button variant="primary"><i className='fa fa-home'></i></Button>
      </>
    )
  }
}

export default App;