import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import Page from '../components/Page.js'
import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'

class AboutPage extends Component {

  componentDidMount(){
    this.props.setPageContentSelector(['.page', '.page img', '.page > about'].join(', '))
  }

  render(){
    return (
      <Page
        className="row defaultOpaque"
        inner={
          <>
            <Col sm={8} >
              <p className="pb-2">My name is Harry Johnson, I'm a freelance Web Developer based around Cambridge.</p>
              <p className="pb-2">After achieving a first-class bachelors degree in Computer Science at The University of Lincoln, I spent 3 years working as a Software Engineer and Website Developer at Camfed International.</p>
              <p className="pb-2">Now, I'm self-employed and build fully-fledged sites and apps from the ground-up. I work mostly with Django and ReactJS, usually in combination with Wagtail and Redux. I am proficient in C#, C++, PHP, Python, JavaScript, CSS, and HTML.</p>
              <p className="pb-2">Some of the private projects I've worked on include a mobile phone messaging app, a social network, a photo management website, a learning management system, and an evolving video game AI.</p>
            </Col>
            <Col sm={4}>
              <img src="/me-cropped-2.png" alt="me" className="w-100 pb-1"/>
            </Col>
          </>
        }
      />)
  }
}

export default connect(null, { setPageContentSelector })(AboutPage);