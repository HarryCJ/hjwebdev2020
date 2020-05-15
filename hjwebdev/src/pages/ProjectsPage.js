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

class ProjectsPage extends Component {

  componentDidMount(){
      // setTimeout(()=>this.props.setPageOpacity(1, 0), 10)
    this.props.setPageContentSelector(['.page', '.page .made-with-col li:nth-child(4)', '.page > projects'].join(', '))

      const projects = [
        '.page > .project-tile:nth-child(1)',
        '.page > .project-tile:nth-child(2)',
        '.page > .project-tile:nth-child(3)',
      ]

      const projectPageSelector = [
        projects[0],
        projects[1],
        projects[2],
      ].join(', ')

      this.props.setPageContentSelector(projectPageSelector)
  }

  render(){
      // this.props.setPageOpacity(1)
    return (
      <Page
        className="row"
        inner={
          <>
            <ProjectTile
              title="SAB Property Management App"
              projectURL={this.props.routes.projectsSAB}
              imgURL="/sabapp.png"
              imgAlt="SAB App"
              defaultOpaque={true}
              className='col-md-3 col-6'
            />
            <ProjectTile
              title="Sam and Max Website"
              projectURL={this.props.routes.projectsSamAndMax}
              imgURL="/samandmax.png"
              imgAlt="Sam and Max"
              defaultOpaque={true}
              className='col-md-3 col-6'
            />
            <ProjectTile
              title="Advanced Boosters Virtual Item Store"
              projectURL={this.props.routes.projectsAB}
              imgURL="/abapp.png"
              imgAlt="Advanced Boosters"
              defaultOpaque={true}
              className='col-md-3 col-6'
            />
          </>
        }
      />)
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageOpacity, setPageContentSelector })(ProjectsPage);