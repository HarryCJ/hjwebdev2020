import React, { Component } from 'react';

class Page extends Component {

  render(){
    return (
    <div 
    	className={this.props.className+" page"}
    >{this.props.inner}</div>);
  }
}

export default Page