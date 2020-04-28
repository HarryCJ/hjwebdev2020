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
import SMProjectPage from './projects/SMProjectPage.js'
import SABProjectPage from './projects/SABProjectPage.js'

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

// class projectsSamAndMaxPage extends Component {
//   render(){
//     return (
//       <Page
//         inner={
//           <>
//             <h2>Hello world</h2>
//           </>
//         }
//       />)
//   }
// }

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentPage: null,
    }
    this.selectors = {
      logo: '.App-logo',
      title: '.rightSide > h1',
      titleLetters: '.rightSide > h1 .letter',
      subTitle: '.rightSide > h2',
      subTitleLetters: '.rightSide > h2 .letter',
      links: [
        '.leftSide > .nav-links > a:nth-child(1)',
        '.leftSide > .nav-links > a:nth-child(2)',
        '.leftSide > .nav-links > a:nth-child(3)',
        '.leftSide > .nav-links > a:nth-child(4)',
      ],
      // pageContent: '.rightSide > div',
    }
    this.paths = [
      {name: this.props.routes.home, value: <ProjectsPage/>},
      {name: this.props.routes.projects, value: <ProjectsPage/>},
      {name: this.props.routes.projectsSAB, value: <SABProjectPage/>},
      // {name: this.props.routes.projectsAB, value: <ProjectsPage/>},
      {name: this.props.routes.projectsSamAndMax, value: <SMProjectPage/>},
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
      scale: [
        {value: 1, easing: 'easeInQuad', duration: delay},
        {value: 1.025, easing: 'easeInQuad', duration: 200},
        {value: 1, easing: 'easeOutQuad', duration: 200},
      ],
      delay: anime.stagger(100, {easing: 'easeInSine'}),
    })
    setTimeout(() => {
      document.querySelectorAll(pageContent).forEach(e => e.style.transform = '')
    }, delay+1000)
  }

  componentDidMount(){
      this.setState({
        currentPage: this.paths.find(path => path.name === window.location.hash)
      })

      const unlisten = this.props.history.listen((location, action) => {
        // console.log(window.location.hash, this.paths, this.paths.find(path => path.name === window.location.hash))
        this.setState({
          currentPage: this.paths.find(path => path.name === window.location.hash)
        }, () => {
          const {pageContentSelector} = this.props
          this.AnimatePageContent(pageContentSelector, 0)
        })
      });

      const {
        logo, title, titleLetters,
        links, subTitle, subTitleLetters,
      } = this.selectors

      const { pageContentSelector } = this.props

      // anime({
      //   targets: logo,
      //   width: '115%',
      //   duration: 20000,
      //   easing: 'easeInOutBack',
      //   delay: 500,
      //   loop: true,
      //   direction: 'alternate',
      // })

      anime({
        targets: titleLetters,
        opacity: 1,
        duration: 500,//anime.stagger(200),
        easing: 'easeInSine',
        scale: [
          {value: 1.05, easing: 'easeInQuad', duration: 200},
          {value: 1, easing: 'easeOutQuad', duration: 200},
        ],
        delay: anime.stagger(25, {start: 500}),
      })

      anime({
        targets: subTitleLetters,
        opacity: 1,
        duration: 500,//anime.stagger(200),
        easing: 'easeInSine',
        scale: [
          {value: 1.05, easing: 'easeInQuad', duration: 200},
          {value: 1, easing: 'easeOutQuad', duration: 200},
        ],
        delay: anime.stagger(25, {start: 750}),
      })

      anime({
        targets: '.top-padding',
        paddingTop: '0vh',
        duration: 1500,//anime.stagger(200),
        easing: 'easeInOutQuad',
        delay: 500,
      })

      anime({
        targets: [
          links[0],
          links[1],
          links[2],
          links[3],
        ],
        opacity: 1,
        duration: 500,//anime.stagger(200),
        easing: 'easeInSine',
        scale: [
          {value: 1.01, easing: 'easeInQuad', duration: 200},
          {value: 1, easing: 'easeOutQuad', duration: 200},
        ],
        // [
        //   {value: 0, duration: 500},
        //   {value: 1, easing: 'easeInSine', duration: 500},
        // ],
        delay: anime.stagger(200, {start: 1000}),
      })

      setTimeout(() => {
        document.querySelector(links[0]).classList.add('active')
      }, 1800)
      // setTimeout(() => {
        // document.querySelector(links[0]).classList.add("active")
      // }, 750)
  }

  componentWillReceiveProps(nextProps) {

      const { pageContentSelector } = nextProps
      if (pageContentSelector) {
        this.AnimatePageContent(pageContentSelector, 1250)
      }
  }

  textWrapper = (text, className) => {
    return <span dangerouslySetInnerHTML={{__html: text.replace(/\S/g, "<span class='"+className+"'>$&</span>")}}/>
  }

  setActive = e => {
    const previousActive = document.querySelector('.nav-links .active')
    // previousActive.animationName = ''
    // previousActive.animationName = null
    // e.target.style.color = 'rgba(255, 254, 255, 0.5)'
    // previousActive.style.marginRight = '0px'
    previousActive.classList.remove('active')

    const target = e.target

    // var newone = e.target.cloneNode(true);
    // e.target.style.color = 'rgba(255, 254, 255, 0.5)'
    // e.target.style.marginRight = '0px'
    setTimeout(() => target.classList.add('active'), 50)
    // e.target.parentNode.replaceChild(newone, e.target);
  }

  render() {
    console.log("render", this.state)
    const {currentPage} = this.state
    return (
      <Container>
              <Router history={this.props.history}>
        <Row className="center-row pt-5">
          <div className="top-padding"></div>
          <Col sm={2} className="leftSide">
            <img src="/logofinal.png" className="App-logo" alt="logo" />
            <div className="nav-links mt-5">
              <Link className="defaultOpaque" onClick={this.setActive} to={this.props.routes.projects}>Projects</Link>
              <Link className="defaultOpaque" onClick={this.setActive} to={this.props.routes.about}>About</Link>
              <a className="defaultOpaque" onClick={this.setActive} href="#">Services</a>
              <a className="defaultOpaque" onClick={this.setActive} href="#">Contact</a>
            </div>
          </Col>
          <Col sm={10} className="rightSide">
            <h1 className="">{this.textWrapper('Harry Johnson Web Development', 'defaultOpaque letter')}</h1>
            <h2 className="">{this.textWrapper('Full-stack developer', 'defaultOpaque letter')}</h2>
            <div className="mt-5 mx-n3">
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
