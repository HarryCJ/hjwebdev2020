import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import anime from 'animejs';
import Page from '../components/Page.js'
import ProjectTile from '../components/ProjectTile.js'
import { Router } from "react-router";
import { Route, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DelayLink from '../components/DelayLink.js'
import BackPageButton from '../components/BackPageButton.js'
import { connect } from 'react-redux'
import { setPageOpacity } from '../redux/actions/siteActions'

class SMProjectPage extends Component {

  componentDidMount(){
      setTimeout(()=>this.props.setPageOpacity(1, 0), 100)
  }

  render(){
    return (
      <Page
        className="from-left"
        inner={
          <>
            <BackPageButton 
              to={this.props.routes.projects} 
            />
            <Col sm={12}>
              <img src="/samandmax_header.png" className="w-100" />
            </Col>
          </>
        }
      />)
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageOpacity })(SMProjectPage);