import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'
import ProjectPageTemplate from './ProjectPageTemplate.js'

class SMProjectPage extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <ProjectPageTemplate
        clientHomepage={'https://samandmax.co.uk/'}
        projectWebsite={'https://samandmax.co.uk/'}
        projectLogoURL={'/sm-logo.png'}
        projectTitle={'Sam and Max Website'}
        projectSubtitle={'Sam and Max is a website based on the comic book, television series, and video game franchise.'}
        photoswipeItems={[
          {src: "/screenshots/sm/sm (1).png", title: "Homepage", description: "", w:2405, h:1454},
          {src: "/screenshots/sm/sm (2).png", title: "Article with comments", description: "", w:2405, h:1454},
          {src: "/screenshots/sm/sm (3).png", title: "Page", description: "", w:2405, h:1454},
          {src: "/screenshots/sm/sm (4).png", title: "Forum homepage", description: "", w:2405, h:1454},
        ]}
        projectFeatures={[
          'Article management and editing',
          'CMS',
          'Mobile friendly',
          'Integrated forum',
          'SSO',
          'Galleries',
        ]}
        projectMadeWith={[
          {
            title: 'ReactJS',
            url: 'https://reactjs.org/',
            logo: '/logos/reactjs-logo.png',
          },
          {
            title: 'Django',
            url: 'https://www.djangoproject.com/',
            logo: '/logos/django-logo.png',
          },
          {
            title: 'Wagtail',
            url: 'https://wagtail.io/',
            logo: '/logos/wagtail-logo.png',
          },
          {
            title: 'Discourse',
            url: 'https://www.discourse.org/',
            logo: '/logos/discourse-logo.svg',
          },
          {
            title: 'Bootstrap',
            url: 'https://getbootstrap.com/',
            logo: '/logos/bootstrap-logo.svg',
          },
          {
            title: 'MySQL',
            url: 'https://www.mysql.com/',
            logo: '/logos/mysql-logo.png',
          },
        ]}
      />
    )
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageContentSelector })(SMProjectPage);