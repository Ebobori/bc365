import React from 'react';
import logo from './logo.svg';
import hero from './image/NetworkPic1.png';
import Speaker1 from './image/EricB.png';
import Speaker2 from './image/mich3.png';
import Speaker3 from './image/mich4.png';
import Icon1 from './image/live-vacancies.png';
import Icon2 from './image/leader.png';
import Icon3 from './image/cv.png';
import Icon4 from './image/property.png';
import Icon5 from './image/forex.png';
import Icon6 from './image/brexit.png';
import './App.css';
import './main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from './SimpleMap';

function App2() {
  return (
    <div className="App2">
        <Container fluid={true} className="mainbod">
          <Row className="jamestown">
            <Col md={12}>
              <Row className="nav-log level-1">
                <Col md={2} className="blue-log">
                  <img src={logo} className="App2-logo" alt="logo" />                  
                  <span class="dot"></span>

                </Col>
                <Col md={4}>
                </Col>
                <Col md={5}>
                <div class="sectional-nav clearBoth">
              	<div class="container">
                  <ul className="Mainul">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#why">Why Attend</a>
                    </li>
                    <li>
                      <a href="#speakers">Speakers</a>
                    </li>
                    <li>
                      <a href="#location">Location</a>
                    </li>
                  </ul>
                  </div>
                  {/* <select name="sectional_nav" id="sectional_nav" class="form-control hidden-md-up" onchange="window.location.href=this.value">
                    <option value="0">Navigate to...</option>
                    <option value="https://www.bc365.org.uk/#home">Home</option>
                    <option value="https://www.bc365.org.uk/#why">Why Attend</option>
                    <option value="https://www.bc365.org.uk/#speakers">Speakers</option>
                    <option value="https://www.bc365.org.uk/#location">Location</option>
                  </select> */}
                <Button className="actionbtn form-control hidden-md-up" id="sectional_nav" target="_blank" href="https://bcs365.eventbrite.com">BOOK NOW</Button>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>

            <Row className="level-2">
                <Col md={{span: 5, offset: 1}} className="carouselT" >
                <div id="home" /> 
                  <h2>BUSINESS &amp; CAREER</h2>
                  <h1>SUMMIT 365</h1>
                    <h2 className="topliner">January 18 2020 <br/> 10 am</h2>

                <p>Business & Career 365 summit is a free event designed to provide you with the key knowledge and insight you need to elevate your business or career to the next level.
                <br/>
                {/* The summit will feature an array of guest speakers, all of whom are experts within their respective fields. In addition to the speakers, there will be a number of interactive sessions, including networking opportunities, CV clinics and the opportunity to apply for live job vacancies.
                <br/>
                For those hoping to develop their business acumen, there will also be practical advice and step by step guides on how to do just that. */}
                </p>
                <Button className="actionbtn" target="_blank" href="https://bcs365.eventbrite.com">BOOK NOW</Button>
                </Col>
                <Col md={5}>
                  <div className="frames">
                    <img src={hero} className="heroimage tint" alt="people networking"/>
                  </div>
                </Col>
                <Col md={1}></Col>
              </Row>
          </Col>
          </Row>
          <Row className="level-3">
            <Col md={12}>
              <Row>
                <Col md={12}>
                <div id="why" /> 

                  <p className="cent">WHY</p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p className="cent2">You need to attend</p>
                </Col>
              </Row>
              <Row className="reasonboxes">
                <Col md={12}>
                  <Row className="1stRow">
                    <Col md={4}>
                      <img src={Icon4} className="icon" alt="icon"/>
                      <p className="header">Property Investment</p>
                      <p className="content"> We will have experts on property investments giving talks on how to use property as a second form of income
                        </p>
                    </Col>
                    <Col md={4}>
                      <img src={Icon5} className="icon" alt="icon"/>
                      <p className="header">Forex trading</p>
                      <p className="content">We will have experience traders talk about what investing into the forex market can do for your savings
                        </p>
                    </Col>
                    <Col md={4}>
                      <img src={Icon6} className="icon" alt="icon"/>
                      <p className="header">Brexit Bursting ideas</p>
                      <p className="content">
                        We will be highlighting businesses ideas that are most likely Brexit proof
                        </p>
                    </Col>
                  </Row>
                  <Row className="2ndRow">
                    <Col md={4}>
                      <img src={Icon1} className="icon" alt="icon"/>
                      <p className="header">Live Vacancies</p>
                      <p className="content">
                        At this event they will be vacancies that are currently active and looking for candidates to fill them, you are encouraged to bring along your CV and see if any of the roles may be a suitable fit                    </p>
                    </Col>
                    <Col md={4}>
                      <img src={Icon2} className="icon" alt="icon"/>
                      <p className="header">Talks From Industry Leaders</p>
                      <p className="content">
                      This event will have a host of speakers that are the best in their Industry, sharing their insight and knowledge, it will be unmissable.
                        </p>
                    </Col>
                    <Col md={4}>
                      <img src={Icon3} className="icon" alt="icon"/>
                      <p className="header">CV Clinic (Popular)</p>
                      <p className="content">
                        In addition to live vacancies we are going to have top recruiters help people look at CVs, helping attendees to get job ready
                        </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="level-speakers">
                <Col md={12}>
                   <Row>
                    <Col md={12}>
                    <div id="speakers" /> 
                      <p className="cent">GUESTS</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <p className="cent2">Speakers</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <img src={Speaker1} className=" eric speakerpicture" alt="Speaker Pic"/>
                      <p className="header">Key Speaker - Éric Behanzin</p>
                      <p className="content">
                      Highest Paid Business Coach in UK/Europe
                        </p>
                        <p><a target="_blank" rel="noopener noreferrer" href="http://ericbehanzin.com/">Website</a></p>
                  </Col>
                    <Col md={4}>
                      <img src={Speaker2} className="speakerpicture" alt="Speaker Pic"/>
                      <p className="header">Pastor Enoch Alamu <br/> </p>
                      <p className="content">
                          Property Investor
                        </p>
                  </Col>
                    <Col md={4}>
                      <img src={Speaker3} className="speakerpicture" alt="Speaker Pic"/>
                      <p className="header">Michelle Raymond</p>
                      <p className="content">
                      Tedx Speaker
                        </p>
                  </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="level-schedule">
                <Col md={12}>
                   <Row>
                    <Col md={12}>
                    <div id="location" /> 
                      <p className="cent">Location</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <p className="cent2">HOW TO GET THERE</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>  
                   <center className="header transport cent">Lansdowne Hotel<br/>
                    1 Lansdowne Road<br/>
                    Croydon, <br/>
                    CR9 2BN</center> 
                    
                    <SimpleMap/>
                    <p className="header transport cent">
                      <b>Closest train station</b>  <br/>
                      East Croydon (SOUTHERN) <br/> <br/>
                      <b>Closest bus stops</b>
                      <br/>
                       Fairfield Halls (KD) is 306 meters away, 5 min walk.
                      Delta Point (WP) is 351 meters away, 6 min walk.
                      Park Lane / Fairfield Halls (KA) is 380 meters away, 6 min walk.
                      Dingwall Road / East Croydon Station (E8) is 405 meters away, 6 min walk.
                      Park Street (KJ) is 496 meters away, 8 min walk.
                      <br/><br/>
                      <b>Bus Route</b> <br/>
                      264, 405, 407, 468, 64, 75 <br/>
                      <br/>
                      <b>Tramlink </b>
                      <br/>
                      TRAM
                    </p>
                        <ul class="timeline">
                        <li class="active">
                          <br/>
                          <p className="header">Networking</p>
                          <p className="content">by everyone</p>
                          </li>
                        <li>Crash Course</li>
                        <li>Panel</li>
                        <li>Speakers</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="orangebox">
                      <p className="header">Hurry up! Book your seat now</p>
                      <p className="content">Seats are limited. So register quickly to grab a seat</p>
                      <Button className="actionbtn2" target="_blank" href="https://bcs365.eventbrite.com">BOOK NOW</Button>


                    </div>
                </Col>
                <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={12}>
            <p className="footer"><br/><br/>All rights reserved © BC365 and Christ's Liberty Church</p>
            </Col>
            {/* <Col md={2}>
            </Col> */}
          </Row>
                 
            </Col>
          </Row>
        </Container>
        </div>
  );
}

export default App2;
