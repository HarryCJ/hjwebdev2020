import React, { Component } from 'react';
import ProjectPageTemplate from './ProjectPageTemplate.js'

class GrowthEQProjectPage extends Component {

  render(){
    return (
      <ProjectPageTemplate
        clientHomepage={'https://growth-eq.co.uk/'}
        projectLogoURL={'/growtheq-logo.png'}
        projectTitle={'Growth EQ Website'}
        projectSubtitle={'With global experience that spans across corporate HR and growth technology, Growth EQ brings together the robust practices of global Talent Acquisition with the agility and pace of start-ups and scales-ups.'}
        photoswipeItems={[
          {src: "/screenshots/growtheq/growth-eq (1).png", title: "Homepage", description: "", w:2405, h:1454},
          {src: "/screenshots/growtheq/growth-eq (2).png", title: "Hover blocks on homepage", description: "", w:2405, h:1454},
          {src: "/screenshots/growtheq/growth-eq (3).png", title: "Hover icons on expertise page", description: "", w:2405, h:1454},
          {src: "/screenshots/growtheq/growth-eq (4).png", title: "Hover icons on case studies page", description: "", w:2405, h:1454},
          {src: "/screenshots/growtheq/growth-eq (5).png", title: "About page content", description: "", w:2405, h:1454},
          {src: "/screenshots/growtheq/growth-eq (6).png", title: "Contact page content", description: "", w:2405, h:1454},
        ]}
        projectFeatures={[
          'Mobile friendly',
          'Custom theme',
          '3 custom blocks',
        ]}
        projectMadeWith={[
          {
            title: 'WordPress',
            url: 'https://wordpress.com/',
            logo: '/logos/wordpress-logo.png',
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
        nextProject={this.props.nextProject}
      />
    )
  }
}

export default GrowthEQProjectPage