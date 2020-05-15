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

class AboutPage extends Component {

  componentDidMount(){
    this.props.setPageContentSelector(['.page', '.page img', '.page > about'].join(', '))
      // const projects = [
      //   '.page > .project-tile:nth-child(1)',
      //   '.page > .project-tile:nth-child(2)',
      //   '.page > .project-tile:nth-child(3)',
      //   '.page > .project-tile:nth-child(4)',
      // ]

      // const projectPageSelector = [
      //   projects[0],
      //   projects[1],
      //   projects[2],
      // ].join(', ')

      // this.props.setPageContentSelector(projectPageSelector)
  }

  render(){
    // window.requestAnimationFrame(function() {
    //   document.querySelectorAll(['.page', '.page img'].join(', ')).forEach(ele => ele.removeAttribute('style'))
    // });
    return (
      <Page
        className="row defaultOpaque"
        inner={
          <>
            <Row className="pl-3">
              <Col sm={8} >
                <p className="pb-2">My name is Harry Johnson, I'm a freelance Web Developer based around Cambridge.</p>
                <p className="pb-2">After achieving a first-class bachelors degree in Computer Science at The University of Lincoln, I spent 3 years working as a Software Engineer and Website Developer at Camfed International.</p>
                <p className="pb-2">Now, I'm self-employed and build fully-fledged sites and apps from the ground-up. I work mostly with Django and ReactJS, usually in combination with Wagtail and Redux. I am proficient in C#, C++, PHP, Python, JavaScript, CSS, and HTML.</p>
                <p className="pb-2">Some of the private projects I've worked on include a mobile phone messaging app, a social network, a photo management website, a learning management system, and an evolving video game AI.</p>
              </Col>
              <Col sm={4}>
                <img src="/me-cropped-2.png" className="w-100 pb-1"/>
              </Col>
            </Row>
          </>
        }
      />)
  }
}

const mapStateToProps = state => ({
  // history: state.site.history,
  // routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageContentSelector })(AboutPage);