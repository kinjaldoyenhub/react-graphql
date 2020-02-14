import React, { Component } from 'react';


class TabHolder extends Component {

  constructor(props){
        super(props);

        this.state = {
            initial: ''
        };
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render() {

    return (

      <div className="tab-content">
              {this.props.children}
      </div>


    );
  }
}



export default (TabHolder);
