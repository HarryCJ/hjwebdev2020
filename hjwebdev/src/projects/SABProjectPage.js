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
      {src: "/screenshots/sab/sab (1).png", title: "Main menu", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (2).png", title: "Address management", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (3).png", title: "Address edit form", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (4).png", title: "Routine check management", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (5).png", title: "Routine check edit form", description: "", w:2405, h:1454},
      // {src: "/screenshots/sab/sab (6).png", title: "t", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (7).png", title: "Routine check signature", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (8).png", title: "Inventory edit form", description: "", w:2405, h:1454},
      // {src: "/screenshots/sab/sab (9).png", title: "t", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (10).png", title: "User edit form", description: "", w:2405, h:1454},
      {src: "/screenshots/sab/sab (11).png", title: "Inventory settings", description: "", w:2405, h:1454},
    ]

    this.projectWebsite = 'https://www.sab.co.uk/'
    this.projectLogoURL = '/sab-border-3.png'
    this.projectTitle = 'SAB Property Management App'
    this.projectSubtitle = 'Saint Andrews Bureau is a lettings, sales, estate management and investment company with offices located in London, Cambridgeshire and Hertfordshire.'
    this.projectFeatures = [
      'Offline capability',
      'Mobile friendly',
      'Cross-platform - iOS/Android/Desktop browser',
      'Touch-screen signature input',
      'Modals',
      'PDF reports',
      'Email notifications',
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

export default connect(mapStateToProps, { setPageContentSelector })(SABProjectPage);