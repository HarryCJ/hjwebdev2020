import { connect } from 'react-redux'
import { setPageContentSelector } from '../redux/actions/siteActions'
import ProjectPageTemplate from './ProjectPageTemplate.js'

class SABProjectPage extends ProjectPageTemplate {

  constructor(props){
    super(props)

    this.pageSelector = [
      '.page',
      '.page .made-with-col li:nth-child(4)',
    ].join(', ')

    this.photoswipeItems = [
      {src: "/screenshots/ab/ab (1).png", title: "Homepage banner", description: "", w:2405, h:1454},
      {src: "/screenshots/ab/ab (2).png", title: "Latest and popular products", description: "", w:2405, h:1454},
      {src: "/screenshots/ab/ab (3).png", title: "Contact form", description: "", w:2405, h:1454},
    ]

    this.projectLogoURL = '/ab-logo.png'
    this.projectTitle = 'Advanced Boosters Virtual Item Store'
    this.projectSubtitle = 'Advanced Boosters is an online store selling gaming services.'
    this.projectFeatures = [
      'E-Commerce store',
      'Mobile friendly',
      'Real-time online chat',
      'Staff fulfilment assignment',
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
        title: 'Shopify',
        url: 'https://www.shopify.com/',
        logo: '/logos/shopify-logo.png',
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

export default connect(mapStateToProps, { setPageContentSelector })(SABProjectPage);