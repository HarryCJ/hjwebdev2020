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
      currentPage: null,
    }
    this.selectors = {
      logo: '.App-logo',
      title: '.rightSide > h1',
      links: [
        '.nav-links > a:nth-child(1)',
        '.nav-links > a:nth-child(2)',
        '.nav-links > a:nth-child(3)',
        '.nav-links > a:nth-child(4)',
      ],
      subTitle: '.rightSide > h2',
      // pageContent: '.rightSide > div',
    }
    this.paths = [
      {name: this.props.routes.home, value: <ProjectsPage/>},
      {name: this.props.routes.projects, value: <ProjectsPage/>},
      // {name: this.props.routes.projectsSAB, value: <ProjectsPage/>},
      // {name: this.props.routes.projectsAB, value: <ProjectsPage/>},
      // {name: this.props.routes.projectsSamAndMax, value: <ProjectsPage/>},
      {name: this.props.routes.projectsSPG, value: <ProjectsSPGPage/>},
      // {name: this.props.routes.about, value: <ProjectsPage/>},
    ]
  }

  AnimatePageContent = (pageContent, delay) => {
    // anime({
    //   targets: pageContent,
    //   keyframes: [
    //     {opacity: 1, duration: 500},
    //   ],
    //   delay: 1500,
    //   easing: 'easeInOutQuad',
    // });

    anime({
      targets: pageContent,
      opacity: [
        {value: 0, duration: delay},
        {value: 1, easing: 'easeInOutQuad', duration: 500},
      ],
      delay: anime.stagger(100, {grid: [5, 2], from: 'first', easing: 'easeInSine'}),
    })
  }

  componentDidMount(){
      // anime({
      //   targets: [document.querySelector('body')],
      //   keyframes: [
      //     {opacity: 1, duration: 1000},
      //   ],
      //   delay: 250,
      //   easing: 'easeInOutQuad',
      // });

      // const logo = document.querySelector('.App-logo')
      // const title = document.querySelector('.rightSide > h1')
      // const links = [
      //   document.querySelector('.nav-links > a:nth-child(0)'),
      //   document.querySelector('.nav-links > a:nth-child(1)'),
      //   document.querySelector('.nav-links > a:nth-child(2)'),
      //   document.querySelector('.nav-links > a:nth-child(3)'),
      // ]
      // const subTitle = document.querySelector('.rightSide > h2')
      // const pageContent = document.querySelector('.rightSide > div')
      this.setState({
        currentPage: this.paths.find(path => path.name === window.location.hash)
      })

      const unlisten = this.props.history.listen((location, action) => {
        // location is an object like window.location
        // console.log(action, location.pathname, location.state);
        console.log(window.location.hash, this.paths, this.paths.find(path => path.name === window.location.hash))
        this.setState({
          currentPage: this.paths.find(path => path.name === window.location.hash)
        }, () => {
          const {pageContentSelector} = this.props
          this.AnimatePageContent(pageContentSelector, 0)
        })
      });

      const {
        logo, title,
        links, subTitle,
      } = this.selectors

      const { pageContentSelector } = this.props

      anime({
        targets: [
          logo, title,
          links[0], subTitle,
          links[1],
          links[2],
          links[3],
        ].join(', '),
        opacity: [
          {value: 0, duration: 500},
          {value: 1, easing: 'easeInSine', duration: 500},
        ],
        delay: anime.stagger(200, {grid: [5, 2], from: 'first'}),
      })
      // setTimeout(() => {
        // document.querySelector(links[0]).classList.add("active")
      // }, 750)
  }

  componentWillReceiveProps(nextProps) {

      const { pageContentSelector } = nextProps
      if (pageContentSelector) {
        this.AnimatePageContent(pageContentSelector, 1400)
      }
  }



  render() {
    console.log("render", this.state)
    const {currentPage} = this.state
    return (
      <Container>
              <Router history={this.props.history}>
        <Row>
          <div className="top-padding"></div>
          <Col sm={2} className="leftSide">
            <img src="/logofinal.png" className="defaultOpaque App-logo" alt="logo" />
            <div className="nav-links">
              <Link className="defaultOpaque active" to={this.props.routes.projects}>Projects</Link>
              <Link className="defaultOpaque" to={this.props.routes.about}>About</Link>
              <a className="defaultOpaque" href="#">Services</a>
              <a className="defaultOpaque" href="#">Contact</a>
            </div>
          </Col>
          <Col sm={10} className="rightSide">
            <h1 className="defaultOpaque">Harry Johnson Web Development</h1>
            <h2 className="defaultOpaque">Full-stack developer</h2>
            <div className="mt-3 mx-n3">
              {
                
                (currentPage && currentPage.value) || <ProjectsPage/>
              }

                {/**<Switch>
                                              <Route exact path={this.props.routes.home} component={ProjectsPage}/>
                                              <Route exact path={this.props.routes.projects}  component={ProjectsPage}/>
                                              <Route exact path={this.props.routes.projectsSAB}  component={projectsSABPage}/>
                                              <Route exact path={this.props.routes.projectsAB}  component={projectsABPage}/>
                                              <Route exact path={this.props.routes.projectsSamAndMax}  component={projectsSamAndMaxPage}/>
                                              <Route exact path={this.props.routes.projectsSPG}  component={ProjectsSPGPage}/>
                                            </Switch>
                            **/}            </div>
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
  pageContentSelector: state.site.pageContentSelector,
});

export default connect(mapStateToProps, { setPageOpacity })(App);
