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
import { setPageOpacity, toggleAlignCenter } from '../redux/actions/siteActions'
import pswpElement from '../components/pswpElement.js'

class SABProjectPage extends Component {

  componentDidMount(){
      setTimeout(()=>this.props.setPageOpacity(1, 0), 100)
      // this.props.toggleAlignCenter(false)
  }

  initialiseGallery = (e, i) => {
    console.log("initialiseGallery index", i)
    // var pswpEle = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild//document.querySelectorAll('.pswp')[0];
    var pswpEle = document.querySelector('.pswp')
    console.log("pswpEle", pswpEle)

    // build items array
    // var items = block.value.children.map(item => {
    //   item.src = global_vars.api_url+item.src
    //   if (!item.title && item.description) {
    //     item.title = item.description
    //     item.description = ''
    //   }
    //   // item.title = item.r
    //   // item.description = item.description
    //   return item
    // })t
    var items = [
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
      addCaptionHTMLFn: function(item, captionEl, isFake) {
        const hasTitle = item.title && item.title !== ''
        const hasDesc = item.description && item.description !== ''
        if (hasTitle && hasDesc) {
          captionEl.children[0].innerHTML = item.title +  '<br/><small>' + item.description + '</small>';
          return true
        } else if (hasTitle || hasDesc) {
          captionEl.children[0].innerHTML = hasTitle ? item.title : item.description;
          // captionEl.children[0].innerText = item.title ? item.title : item.description;
          return true
        } else {
          captionEl.children[0].innerText = '';
          return false;
        }
      },
    };

    // if (window.innerWidth < 1024){
    // options['modal'] = false
    // options['closeOnVerticalDrag'] = false
    // options['closeOnScroll'] = false
    // options['focus'] = false
    // }

    // Initializes and opens PhotoSwipe
    /*eslint-disable no-undef*/
    var gallery = new PhotoSwipe( pswpEle, PhotoSwipeUI_Default, items, options);
    gallery.listen('updateScrollOffset', function(_offset) {
        var r = pswpEle.getBoundingClientRect();
        _offset.x += r.left;
        _offset.y += r.top;
    });
    gallery.listen('preventDragEvent', function(e, isDown, preventObj) {
        preventObj.prevent = false;
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
        className="from-left ml-3"
        inner={
          <Row>
            <Col sm={10}>
              <h3 className="">SAB Property Management App</h3>
              <p className="font-italic">Saint Andrews Bureau is a lettings, sales, estate management and investment company with offices located in London, Cambridgeshire and Hertfordshire.</p>
            </Col>
            <Col sm={2}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 50, hide: 50 }}
                overlay={
                  <Tooltip id="button-tooltip">
                    <b>Visit website</b>
                  </Tooltip>
                }
              >
                <a href="https://www.sab.co.uk/">
                  <img src="/sab-border-3.png" className="w-100" />
                </a>
              </OverlayTrigger>
            </Col>
            <Col sm={12} className="mt-3">
              {pswpElement}
            </Col>
            <Col sm={6} className="mt-3">
              <p>Features:</p>
              <ul>
                <li>Offline capability</li>
                <li>Mobile friendly</li>
                <li>Cross-platform - iOS/Android/Desktop browser</li>
                <li>Touch-screen signature input</li>
                <li>Intuitive UI</li>
                <li>PDF reports</li>
                <li>Email notifications</li>
              </ul>
            </Col>
            <Col sm={6} className="mt-3 text-right">
              <p>Made with:</p>
              <ul className="logo-list">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 50, hide: 50 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      <b>ReactJS</b>
                    </Tooltip>
                  }
                >
                <li>
                  <a href="https://reactjs.org/">
                    <img src="/logos/reactjs-logo.png" height="50"/>
                  </a>
                </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 50, hide: 50 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      <b>Django</b>
                    </Tooltip>
                  }
                >
                <li>
                  <a href="https://www.djangoproject.com/">
                    <img src="/logos/django-logo.png" height="50"/>
                  </a>
                </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 50, hide: 50 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      <b>Bootstrap</b>
                    </Tooltip>
                  }
                >
                <li>
                  <a href="https://getbootstrap.com/">
                    <img src="/logos/bootstrap-logo.svg" height="50"/>
                  </a>
                </li>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 50, hide: 50 }}
                  overlay={
                    <Tooltip id="button-tooltip">
                      <b>MySQL</b>
                    </Tooltip>
                  }
                >
                <li>
                  <a href="https://www.mysql.com/">
                    <img src="/logos/mysql-logo.png" height="50"/>
                  </a>
                </li>
                </OverlayTrigger>
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

export default connect(mapStateToProps, { setPageOpacity, toggleAlignCenter })(SABProjectPage);