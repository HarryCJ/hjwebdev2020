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

    this.pageSelector = ''
    this.photoswipeItems = [
    ]
    this.projectWebsite = ''
    this.projectLogoURL = ''
    this.projectTitle = ''
    this.projectSubtitle = ''
    this.projectFeatures = [
    ]
    this.projectMadeWith = [
    ]
  }

  componentDidMount(){
      this.props.setPageContentSelector(this.pageSelector)
  }

  initialiseGallery = (e, i) => {
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
      pinchToClose: false,
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
    var gallery = new PhotoSwipe( pswpEle, PhotoSwipeUI_Default, this.photoswipeItems, options);
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
      thisComp.initialiseGallery()
    });
    
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
                    <b>{this.projectWebsite ? 'Visit website' : 'Currently offline'}</b>
                  </Tooltip>
                }
              >
                {this.projectWebsite ?
                  <a href={this.projectWebsite}>
                    <img src={this.projectLogoURL} className="w-100 project-logo " />
                  </a>
                  :
                  <img src={this.projectLogoURL} className="w-100 project-logo " />
                }
              </OverlayTrigger>
            </Col>
            <Col sm={10}>
              <h3 className="project-title ">{this.projectTitle}</h3>
              <p className="project-subheading  font-italic">{this.projectSubtitle}</p>
            </Col>
            <Col sm={12} className="mt-3 pswp-col">
              {pswpElement}
            </Col>
            <Col sm={6} className="features-col mt-3">
              <p className="">Features:</p>
              <ul>
                {this.projectFeatures.map(item => <li>{item}</li>)}
              </ul>
            </Col>
            <Col sm={6} className="made-with-col mt-3 text-right">
              <p className="">Made with:</p>
              <ul className="logo-list">
                {this.projectMadeWith.map(item => 
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
          </Row>
        }
      />)
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
  routes: state.site.routes,
});

export default ProjectPageTemplate