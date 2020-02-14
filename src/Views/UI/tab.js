import React, { Component } from 'react';


class Tab extends Component {

  constructor(props){
        super(props);

        this.state = {
            initial: '',
            classActive: 'tab-pane'
        };
  }

  componentWillMount(){

  }

  componentDidMount(){

    if(this.props.active == 'on'){
      this.setState({classActive: 'tab-pane active'});
    } else {
      this.setState({classActive: 'tab-pane'});
    }

  }

  render() {

    return (

      <div className={this.state.classActive} id={this.props.id}>
              {this.props.children}
      </div>


    );
  }
}



export default (Tab);
