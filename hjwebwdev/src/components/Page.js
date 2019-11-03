import React, { Component } from 'react';
import ProjectTile from './ProjectTile.js'
// import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'

class Page extends Component {

  render(){
    return <div className="page">{this.props.inner}</div>;
  }
}

export default Page;
