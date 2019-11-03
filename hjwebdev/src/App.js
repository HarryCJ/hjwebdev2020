import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import anime from 'animejs';
import Page from './components/Page.js'
import ProjectTile from './components/ProjectTile.js'
import { Router } from "react-router";
import { Route, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DelayLink from './components/DelayLink.js'
import { connect } from 'react-redux'
import { setPageOpacity } from './redux/actions/siteActions'
import ProjectsSPGPage from './ProjectsSPGPage.js'
import ProjectsPage from './ProjectsPage.js'

class projectsSABPage extends Component {
  render(){
    return (
      <Page
        inner={
          <>
            <h2>Hello world</h2>
          </>
        }
      />)
  }
}

class projectsABPage extends Component {
  render(){
    return (
      <Page
        inner={
          <>
            <h2>Hello world</h2>
          </>
        }
      />)
  }
}

class projectsSamAndMaxPage extends Component {
  render(){
    return (
      <Page
        inner={
          <>
            <h2>Hello world</h2>
          </>
        }
      />)
  }
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
      anime({
        targets: [document.querySelector('body')],
        keyframes: [
          {opacity: 1, duration: 1000},
        ],
        delay: 250,
        easing: 'easeInOutQuad',
      });
  }

  render() {
    console.log("render", this.state)
    return (
      <Container>
              <Router history={this.props.history}>
        <Row>
          <div className="top-padding"></div>
          <Col sm={2}>
            <img src="/logofinal.png" className="App-logo" alt="logo" />
            <div className="nav-links">
              <Link className="active" to={this.props.routes.projects}>Projects</Link>
              <a className="" href="#">About</a>
              <a className="" href="#">Services</a>
              <a className="" href="#">Contact</a>
            </div>
          </Col>
          <Col sm={10}>
            <h1>Harry Johnson Web Development</h1>
            <h2>Full-stack developer</h2>
            <div className="mt-3 mx-n3">
                <Switch>
                  <Route exact path={this.props.routes.home} component={ProjectsPage}/>
                  <Route exact path={this.props.routes.projects}  component={ProjectsPage}/>
                  <Route exact path={this.props.routes.projectsSAB}  component={projectsSABPage}/>
                  <Route exact path={this.props.routes.projectsAB}  component={projectsABPage}/>
                  <Route exact path={this.props.routes.projectsSamAndMax}  component={projectsSamAndMaxPage}/>
                  <Route exact path={this.props.routes.projectsSPG}  component={ProjectsSPGPage}/>
                </Switch>
            </div>
          </Col>
        </Row>
              </Router>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageOpacity })(App);
