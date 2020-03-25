import React, { Component } from 'react';
// import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DelayLink from './DelayLink.js'
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux'
import { setPageOpacity } from '../redux/actions/siteActions'

class ProjectTile extends Component {

  render(){
    return (
      <DelayLink 
      	delay={250} 
      	to={this.props.projectURL} 
      	history={this.props.history} 
      	className="defaultOpaque col-sm-3 project-tile"
      >
        <img src={this.props.imgURL} className="w-100" alt={this.props.imgAlt} />
        <h3 className="mt-2 mb-0">{this.props.title}</h3>
      </DelayLink>
    );
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
});

export default connect(mapStateToProps, { setPageOpacity })(ProjectTile);
