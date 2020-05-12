import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'
import ProjectPageTemplate from './ProjectPageTemplate.js'

class SMProjectPage extends ProjectPageTemplate {

  constructor(props){
    super(props)

    this.pageSelector = [
      '.page',
      '.page .made-with-col li:nth-child(4)',
    ].join(', ')

    this.photoswipeItems = [
      {src: "/screenshots/sm/sm (1).png", title: "Homepage", description: "", w:2405, h:1454},
      {src: "/screenshots/sm/sm (2).png", title: "Article with comments", description: "", w:2405, h:1454},
      {src: "/screenshots/sm/sm (3).png", title: "Page", description: "", w:2405, h:1454},
      {src: "/screenshots/sm/sm (4).png", title: "Forum homepage", description: "", w:2405, h:1454},
    ]

    this.projectWebsite = 'https://samandmax.co.uk/'
    this.projectLogoURL = '/sm-logo.png'
    this.projectTitle = 'Sam and Max Website'
    this.projectSubtitle = 'Sam and Max is a website based on the comic book, television series, and video game franchise.'
    this.projectFeatures = [
      'Article management and editing',
      'CMS',
      'Mobile friendly',
      'Integrated forum',
      'SSO',
      'Galleries',
    ]
    this.projectMadeWith = [
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
    ]
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default connect(mapStateToProps, { setPageContentSelector })(SMProjectPage);