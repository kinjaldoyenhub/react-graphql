import React, { Component } from 'react';

//Import Custom Components.
import UserForm from './Views/Form/userForm';

import './Styling/App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {};

  }

  render() {

    return (

        <UserForm />

    );
  }

}


export default App;