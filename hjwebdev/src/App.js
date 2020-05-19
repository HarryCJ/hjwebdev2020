import React, { Component } from 'react';
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
import ProjectsPage from './pages/ProjectsPage.js'
import AboutPage from './pages/AboutPage.js'
import ServicesPage from './pages/ServicesPage.js'
import ContactPage from './pages/ContactPage.js'
import SABProjectPage from './projects/SABProjectPage.js'
import SMProjectPage from './projects/SMProjectPage.js'
import ABProjectPage from './projects/ABProjectPage.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentPage: null,
    }
    this.selectors = {
      logo: '.App-logo',
      title: 'h1.app-title',
      titleLetters: 'h1.app-title .letter',
      subTitle: 'h2.app-subtitle',
      subTitleLetters: 'h2.app-subtitle .letter',
      links: [
        '.leftSide > .nav-links > a:nth-child(1)',
        '.leftSide > .nav-links > a:nth-child(2)',
        '.leftSide > .nav-links > a:nth-child(3)',
        '.leftSide > .nav-links > a:nth-child(4)',
      ],
      // pageContent: '.rightSide > div',
    }
    this.projectPages = [
      {name: this.props.routes.projectsSAB, value: <SABProjectPage/>},
      {name: this.props.routes.projectsAB, value: <ABProjectPage/>},
      {name: this.props.routes.projectsSamAndMax, value: <SMProjectPage/>},
    ]
    // {
    //   projectURL: this.props.routes.projectsSamAndMax,
    //   imgURL: "/samandmax.png",
    // }
    this.paths = [
      {name: this.props.routes.home, value: <ProjectsPage/>},
      {name: this.props.routes.projects, value: <ProjectsPage/>},
      ...this.projectPages,
      {name: this.props.routes.about, value: <AboutPage/>},
      {name: this.props.routes.services, value: <ServicesPage/>},
      {name: this.props.routes.contact, value: <ContactPage/>},
    ]
  }

  // getNextProject = (route) => {
  //   const projectIndex = projectPages.find((item, index) => item.name === route ? index : false)
  //   if (this.projectPages.length < projectIndex+1){
  //     return this.projectPages[projectIndex+1]
  //   }
  //   return null
  // }

  AnimatePageContent = (pageContent, delay) => {
    // anime({
    //   targets: pageContent,
    //   keyframes: [
    //     {opacity: 1, duration: 500},
    //   ],
    //   delay: 1500,
    //   easing: 'easeInOutQuad',
    // });
    anime.remove(pageContent)
    document.querySelectorAll(pageContent).forEach(ele => ele.style.removeProperty('opacity'))
    // setTimeout(() => {
    anime({
      targets: pageContent,
      opacity: [
        {value: 0, duration: delay},
        {value: 1, easing: 'easeInOutQuad', duration: 750},
      ],
      // scale: [
      //   {value: 1, easing: 'easeInQuad', duration: delay},
      //   {value: 1.025, easing: 'easeInQuad', duration: 200},
      //   {value: 1, easing: 'easeOutQuad', duration: 200},
      // ],
      delay: anime.stagger(200, {easing: 'easeInSine'}),
    })
  // }, 100)
    // setTimeout(() => {
    //   document.querySelectorAll(pageContent).forEach(e => e.style.transform = '')
    // }, delay)
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

      console.log("currentPage", window.location.hash)

      if (window.location.hash === ''){
        anime({
          targets: '.top-padding',
          paddingTop: '0vh',
          duration: 1500,//anime.stagger(200),
          easing: 'easeInOutQuad',
          delay: 500,
        })
      } else {
        document.querySelector('.top-padding').remove()
      }

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
        this.setActiveLink(true)
      }, 1800)
  }

  setActiveLink = (isInitial) => {
    const {links} = this.selectors
    const previousActive = document.querySelector('.nav-links .active')
    previousActive && previousActive.classList.remove('active')
    if (previousActive || isInitial){
      let link = links[0]
      if (window.location.hash === '#about') link = links[1]
      else if (window.location.hash === '#services') link = links[2]
      else if (window.location.hash === '#contact') link = links[3]
      document.querySelector(link).classList.add('active')
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("app.js componentWillReceiveProps")
    const { pageContentSelector } = nextProps
    if (pageContentSelector) {

      this.setActiveLink(false)
      // const target = e.target
      // setTimeout(() => target.classList.add('active'), 50)

      console.log("firing AnimatePageContent")
      this.AnimatePageContent(pageContentSelector, 1000)
    }
  }

  textWrapper = (text, className) => {
    return <span dangerouslySetInnerHTML={{__html: text.replace(/\S/g, "<span class='"+className+"'>$&</span>")}}/>
  }

  render() {
    console.log("render", this.state)
    const {currentPage} = this.state

    const isMobile = window.innerWidth <= 575
    const isFluid = window.innerWidth <= 991
    const appTitle = (isMobile) => <h1 className={`app-title ${isMobile ? 'd-block d-sm-none' : 'd-none d-sm-block'}`}>{this.textWrapper('Harry Johnson Web Development', 'defaultOpaque letter')}</h1>
    const appSubtitle = (isMobile) => <h2 className={`app-subtitle ${isMobile ? 'd-block d-sm-none' : 'd-none d-sm-block'}`}>{this.textWrapper('Freelance full-stack developer', 'defaultOpaque letter')}</h2>
    const navLinks = 
      <div className="nav-links">
        <Link className="defaultOpaque" to={this.props.routes.projects}>Projects</Link>
        <Link className="defaultOpaque" to={this.props.routes.about}>About</Link>
        <Link className="defaultOpaque" to={this.props.routes.services}>Services</Link>
        <Link className="defaultOpaque" to={this.props.routes.contact}>Contact</Link>
      </div>

    return (
      <div className={`${isFluid ? 'container-fluid' : 'container'} ${isMobile && 'mobile'}`}>
              <Router history={this.props.history}>
        <Row className="center-row pt-5">
          <div className="top-padding"></div>
          <Col sm={4} md={2} className="leftSide">
            {isMobile && navLinks}
            <img src="/logofinal.png" className="App-logo" alt="logo" />
            {appTitle(true)}
            {appSubtitle(true)}
          </Col>
          <Col sm={8} md={10} className="rightSide">
            {appTitle(false)}
            {appSubtitle(false)}
          </Col>
          <Col sm={4} md={2} className="leftSide" style={{ display: 'flex', flexDirection: 'row-reverse'}}>
            {!isMobile && navLinks}
          </Col>
          <Col sm={8} md={10} className="rightSide">
            <div className="mt-3">
              {
                (currentPage && currentPage.value) || <ProjectsPage/>
              }
            </div>
          </Col>
        </Row>
              </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
  pageContentSelector: state.site.pageContentSelector,
});

export default connect(mapStateToProps, { setPageOpacity })(App);
