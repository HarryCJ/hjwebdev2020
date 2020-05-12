import React, { Component } from 'react';
import ProjectTile from './ProjectTile.js'
// import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

class Page extends Component {

  render(){
    return (
    <div 
    	className={this.props.className+" page"} 
    	style={{
    		// opacity: this.props.page_opacity,
    		// transform: `translateX(${this.props.page_left}px)`,
    	}}
    >{this.props.inner}</div>);
  }
}
const mapStateToProps = state => ({
  page_opacity: state.site.page_opacity,
  page_left: state.site.page_left,
});

export default connect(mapStateToProps, { })(Page);