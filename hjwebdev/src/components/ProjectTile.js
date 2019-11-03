import React, { Component } from 'react';
// import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'

class ProjectTile extends Component {

  render(){
    return (
      <a href="#" className="col-sm-3 project-tile">
        <img src={this.props.imgURL} className="w-100" alt={this.props.imgAlt} />
        <h3 className="mt-2 mb-0">{this.props.title}</h3>
      </a>
    );
  }
}

export default ProjectTile;
