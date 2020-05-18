import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner, Tooltip, OverlayTrigger  } from 'react-bootstrap'
import anime from 'animejs';
import Page from '../components/Page.js'
import ProjectTile from '../components/ProjectTile.js'
import { Router } from "react-router";
import { Route, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DelayLink from '../components/DelayLink.js'
import BackPageButton from '../components/BackPageButton.js'
import { connect } from 'react-redux'
import { setPageOpacity, toggleAlignCenter, setPageContentSelector } from '../redux/actions/siteActions'
import pswpElement from '../components/pswpElement.js'

class ProjectPageTemplate extends Component {

  constructor(props){
    super(props)
    this.state = {
      previousProjectRoute: null,
      previousProject: null,
      nextProjectRoute: null,
      nextProject: null,
    }
  }

  componentDidMount(){
    this.props.setPageContentSelector(['.page', '.page .made-with-col'].join(', '))
    console.log("this.props.routes", this.props.routes)
    let isNextProjectRoute = false
    const route = window.location.hash
    const routesKeys = Object.keys(this.props.routes)
    let newState = {
      previousProject: null,
    }
    routesKeys.some((key, index) => {
      // Check for previous project
      if (routesKeys[index].startsWith('projects') &&
        routesKeys.length > index &&
        this.props.routes[routesKeys[index+1]] === route){
        newState['previousProject'] = this.props.projects[routesKeys[index]]
        newState['previousProjectRoute'] = this.props.routes[routesKeys[index]]
      }
      // Check for next project
      if (this.props.routes[key] === route && 
        routesKeys.length > index &&
        routesKeys[index+1].startsWith('projects')){
        newState['nextProject'] = this.props.projects[routesKeys[index+1]]
        newState['nextProjectRoute'] = this.props.routes[routesKeys[index+1]]
      }
    })
    this.setState(newState)
  }

  initialiseGallery = (thisComp) => {
    var pswpEle = document.querySelector('.pswp')

    // define options (if needed)
    var options = {
      history: false,
      maxSpreadZoom: 1,
      focus: false,
      escKey: false,
      modal: false,
      pinchToClose: false,
      closeOnScroll: false,
      closeOnVerticalDrag: false,
      index: 0,
      fullscreenEl: false,
      zoomEl: false,
      getDoubleTapZoom: function(isMouseClick, item) {
        return item.initialZoomLevel;
      },
      addCaptionHTMLFn: function(item, captionEl, isFake) {
        const hasTitle = item.title && item.title !== ''
        const hasDesc = item.description && item.description !== ''
        if (hasTitle && hasDesc) {
          captionEl.children[0].innerHTML = item.title +  '<br/><small>' + item.description + '</small>';
          return true
        } else if (hasTitle || hasDesc) {
          captionEl.children[0].innerHTML = hasTitle ? item.title : item.description;
          return true
        } else {
          captionEl.children[0].innerText = '';
          return false;
        }
      },
    };

    // Initializes and opens PhotoSwipe
    /*eslint-disable no-undef*/
    var gallery = new PhotoSwipe( pswpEle, PhotoSwipeUI_Default, thisComp.props.photoswipeItems, options);
    gallery.listen('updateScrollOffset', function(_offset) {
        var r = pswpEle.getBoundingClientRect();
        _offset.x += r.left;
        _offset.y += r.top;
    });
    /*eslint-enable no-undef*/
    gallery.init();
  }

  render(){
    let thisComp = this
    window.requestAnimationFrame(function() {
      window.scrollTo(0, 0)
      thisComp.initialiseGallery(thisComp)
    });

    const {previousProject, previousProjectRoute, nextProject, nextProjectRoute} = this.state
    
    return (
      <Page
        className="defaultOpaque ml-2"
        inner={
          <Row>
            <Col sm={2}>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip">
                    <b>{this.props.clientHomepage ? 'Visit website' : 'Currently offline'}</b>
                  </Tooltip>
                }
              >
                {this.props.clientHomepage ?
                  <a href={this.props.clientHomepage}>
                    <img src={this.props.projectLogoURL} className="w-100 project-logo " />
                  </a>
                  :
                  <img src={this.props.projectLogoURL} className="w-100 project-logo " />
                }
              </OverlayTrigger>
            </Col>
            <Col sm={10}>
              <h3 className="project-title ">{this.props.projectTitle}</h3>
              {this.props.projectWebsite && <a href={this.props.projectWebsite} className="project-website font-italic">{this.props.projectWebsite}</a>}
              <p className="project-subheading font-italic">{this.props.projectSubtitle}</p>
            </Col>
            <Col sm={12} className="mt-3 pswp-col">
              {pswpElement}
            </Col>
            <Col sm={6} className="features-col mt-3">
              <p className="">Features:</p>
              <ul>
                {this.props.projectFeatures.map(item => <li>{item}</li>)}
              </ul>
            </Col>
            <Col sm={6} className="made-with-col mt-3 text-right">
              <p className="">Made with:</p>
              <ul className="logo-list">
                {this.props.projectMadeWith.map(item => 
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip">
                        <b>{item.title}</b>
                      </Tooltip>
                    }
                  >
                    <li className="">
                      <a href={item.url}>
                        <img src={item.logo} height="50"/>
                      </a>
                    </li>
                  </OverlayTrigger>
                )}
              </ul>
            </Col>
              {(previousProject || nextProject) && <hr/>}
              {previousProject &&
                    <ProjectTile
                      title={previousProject.title}
                      projectURL={previousProjectRoute}
                      imgURL={previousProject.imgURL}
                      imgAlt={previousProject.imgAlt}
                      defaultOpaque={false}
                      heading={<h4 className="project-tile-heading text-left"><i class="fas fa-long-arrow-alt-left"></i> Previous<span className="d-none d-md-inline"> project</span></h4>}
                      className={`col-6 col-sm-6 col-md-4 col-lg-3`}
                    />
              }
              {nextProject &&
                    <ProjectTile
                      title={nextProject.title}
                      projectURL={nextProjectRoute}
                      imgURL={nextProject.imgURL}
                      imgAlt={nextProject.imgAlt}
                      defaultOpaque={false}
                      heading={<h4 className="project-tile-heading text-right">Next<span className="d-none d-md-inline"> project</span> <i class="fas fa-long-arrow-alt-right"></i></h4>}
                      className={`col-6 col-sm-6 col-md-4 col-lg-3 ${previousProject ? 'offset-md-4 offset-lg-6' : 'offset-6 offset-md-8 offset-lg-9'}`}
                    />
              }
          </Row>
        }
      />)
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
  projects: state.site.projects,
});

// export default ProjectPageTemplate

export default connect(mapStateToProps, { setPageContentSelector })(ProjectPageTemplate);