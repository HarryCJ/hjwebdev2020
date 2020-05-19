import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Page from '../components/Page.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'

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

export default connect(null, { setPageContentSelector })(ServicesPage);