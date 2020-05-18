import React, { Component } from 'react';
import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import anime from 'animejs';
import Page from '../components/Page.js'
import ProjectTile from '../components/ProjectTile.js'
import { Router } from "react-router";
import { Route, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DelayLink from '../components/DelayLink.js'
import { connect } from 'react-redux'
import { setPageOpacity, setPageContentSelector } from '../redux/actions/siteActions'

class ServicesPage extends Component {

  componentDidMount(){
    this.props.setPageContentSelector(['.page', '.page > *', '.page > services'].join(', '))
  }

  render(){
    return (
      <Page
        className="row defaultOpaque"
        inner={
          <>
            <Col sm={12}>
              <p className="pb-2"><i>Pricing varies depending on project complexity. <Link className="underline-link" to='/#contact'>Get in touch</Link> for a free consultation.</i></p>
            </Col>
            <Col sm={5}>
              <ul>
                <li>Fully Bespoke Websites</li>
                <li>Content Management Systems</li>
                <li>Native Applications</li>
              </ul>
            </Col>
            <Col sm={7}>
              <ul>
                <li>Real-time Messaging</li>
                <li>Progressive Web Applications</li>
                <li>Online Stores</li>
              </ul>
            </Col>
          </>
        }
      />)
  }
}

const mapStateToProps = state => ({
  // history: state.site.history,
  // routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageContentSelector })(ServicesPage);