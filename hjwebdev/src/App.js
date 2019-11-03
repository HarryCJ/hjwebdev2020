import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Table, Row, Col, Navbar, Breadcrumb, Dropdown, DropdownButton, Form, Alert, Spinner } from 'react-bootstrap'
import anime from 'animejs';
import Page from './components/Page.js'
import ProjectTile from './components/ProjectTile.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    console.log("componentDidMount", document.querySelector('body'))
      anime({
        targets: [document.querySelector('body')],
        keyframes: [
          {opacity: 1, duration: 1000},
        ],
        delay: 250,
        easing: 'easeInOutQuad',
        begin: () => {
          // footerCar.classList.add("active");
        },
        complete: () => {
          // setTimeout(() => { footerCar.classList.remove("active"); }, 250);
        },
      });
      // anime({
      //   targets: e.target,
      //   keyframes: [
      //     {translateX: -5000, duration: 7500},
      //     {translateX: 5000, duration: 0},
      //     {translateX: 0, duration: 5000},
      //   ],
      //   delay: 500,
      //   easing: 'easeInOutQuad',
      //   begin: () => {
      //     footerCar.classList.add("active");
      //   },
      //   complete: () => {
      //     setTimeout(() => { footerCar.classList.remove("active"); }, 250);
      //   },
      // });
  }

  render() {
    return (
      <Container>
        <Row>
          <div className="top-padding"></div>
          <Col sm={2}>
            <img src="/logofinal.png" className="App-logo" alt="logo" />
            <div className="nav-links">
              <a className="active" href="#">Projects</a>
              <a className="" href="#">About</a>
              <a className="" href="#">Services</a>
              <a className="" href="#">Contact</a>
            </div>
          </Col>
          <Col sm={10}>
            <h1>Harry Johnson Web Development</h1>
            <h2>Full-stack developer</h2>
            <div className="mt-3 mx-n3">
              <Page
                inner={
                  <>
                    <ProjectTile
                      title="Saint Andrews Bureau Routine Check App"
                      imgURL="/sabapp.png"
                      imgAlt="SAB App"
                    />
                    <ProjectTile
                      title="Advanced Boosters Virtual Item Store"
                      imgURL="/abapp.png"
                      imgAlt="Advanced Boosters"
                    />
                    <ProjectTile
                      title="Sam and Max Website"
                      imgURL="/samandmax.png"
                      imgAlt="Sam and Max"
                    />
                    <ProjectTile
                      title="Soham Playgroup Website"
                      imgURL="/sohamplaygroup.png"
                      imgAlt="Soham Playgroup"
                    />
                  </>
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
