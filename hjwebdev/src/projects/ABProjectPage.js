import React, { Component } from 'react';
import ProjectPageTemplate from './ProjectPageTemplate.js'

class ABProjectPage extends Component {

  render(){
    return (
      <ProjectPageTemplate
        projectLogoURL={'/ab-logo.png'}
        projectTitle={'Advanced Boosters Online Store'}
        projectSubtitle={'Advanced Boosters is an online store selling gaming services.'}
        photoswipeItems={[
          {src: "/screenshots/ab/ab (1).png", title: "Homepage banner", description: "", w:2405, h:1454},
          {src: "/screenshots/ab/ab (2).png", title: "Latest and popular products", description: "", w:2405, h:1454},
          {src: "/screenshots/ab/ab (3).png", title: "Contact form", description: "", w:2405, h:1454},
        ]}
        projectFeatures={[
          'E-Commerce store',
          'Mobile friendly',
          'Real-time online chat',
          'Staff fulfilment assignment',
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
            title: 'Shopify',
            url: 'https://www.shopify.com/',
            logo: '/logos/shopify-logo.png',
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

export default ABProjectPage