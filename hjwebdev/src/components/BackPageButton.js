import React, { Component } from 'react';
import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import anime from 'animejs';
import Page from './Page.js'
import ProjectTile from './ProjectTile.js'
import { Router } from "react-router";
import { Route, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DelayLink from './DelayLink.js'
import { connect } from 'react-redux'
import { setPageOpacity } from '../redux/actions/siteActions'

class BackPageButton extends Component {

  render(){
    return (
      <DelayLink 
        delay={250} 
        to={this.props.to} 
        history={this.props.history}
        className="back-button-link"
      ><img src="/back-arrow.png" className="back-arrow" /></DelayLink>)
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageOpacity })(BackPageButton);