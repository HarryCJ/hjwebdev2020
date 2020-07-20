import React, { Component } from 'react'
import Page from '../components/Page.js'
import ProjectTile from '../components/ProjectTile.js'
import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'

class ProjectsPage extends Component {

  componentDidMount(){
    this.props.setPageContentSelector(['.page', '.page .made-with-col li:nth-child(4)', '.page > projects'].join(', '))

      const projects = [
        '.page > .project-tile:nth-child(1)',
        '.page > .project-tile:nth-child(2)',
        '.page > .project-tile:nth-child(3)',
        '.page > .project-tile:nth-child(4)',
      ]

      const projectPageSelector = [
        projects[0],
        projects[1],
        projects[2],
        projects[3],
      ].join(', ')

      this.props.setPageContentSelector(projectPageSelector)
  }

  render(){
    return (
      <Page
        className="row"
        inner={
          <>
            <ProjectTile
              title="Growth EQ Website"
              projectURL={this.props.routes.projectsGrowthEQ}
              imgURL="/growtheq.png"
              imgAlt="Growth EQ"
              defaultOpaque={true}
              className='col-md-3 col-6'
            />
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
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageContentSelector })(ProjectsPage);