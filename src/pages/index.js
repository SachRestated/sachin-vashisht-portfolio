import React from 'react';

import Layout from '../components/Layout';
import {Card, CardDeck, Button, ButtonGroup, ButtonToolbar, Container, Row, Col} from 'react-bootstrap'
import cpp from '../assets/images/c++.png' ;
import htmlx from '../assets/images/html5.svg';
import cssx from '../assets/images/css3.svg';
import reactx from '../assets/images/react.svg';
import jsx from '../assets/images/javascript.svg';
import gitx from '../assets/images/git.svg';
import githubx from '../assets/images/github.svg';
import pythonx from '../assets/images/python.svg';
import redux from '../assets/images/redux.svg';
import firebase from '../assets/images/firebase.svg';
import npm from '../assets/images/npm.svg';
import webpack from '../assets/images/webpack.svg';
import reading from '../assets/images/reading.svg';
import webdev from '../assets/images/webdev.svg';
import ai from '../assets/images/ai.svg';
import blog from '../assets/images/Blog.svg';
import nodejs from '../assets/images/nodejs.svg'
import mongodb from '../assets/images/mongodb.svg'

import chat from '../assets/images/chat.png'
import mern from '../assets/images/mern.png'
import expense from '../assets/images/expense.png'
import hangman from '../assets/images/hangman.png'
import color from '../assets/images/color.png'
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import '../assets/bootstraped.min.css'


const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100 ">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
      
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Hi 👋🏻, I am Sachin Vashisht, a Web Developer and Competitive Programmer from New Delhi, India 🇮🇳

I am final year student currently pursuing B Tech. in Information Technology from Delhi Technological University(Formerly known as Delhi College of Engineering).
          </p>
          <p className="lead mb-5">
            My areas of interest are Web Development, Problem Solving, Artificial Intelligence and Machine Learning. I am currently working with C++, Python, JavaScript and MERN(MongoDB, Express, ReactJs, Node.Js) Stack.

            I have a strong foundation of Data Structures, Algorithms and Computer Science Fundamentals. I am currently looking for remote internships for web development and software development roles.
          </p>

          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
            
          </div>
        </div>
      </section>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Delhi Technological University (Formerly DCE)</h3>
              <div className="subheading">Bachelor of Technology</div>
              <div >Information Technology</div>
              <p>Current Aggregate CGPA: 8.70</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August'17 - June'21(Expected)</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">G.D.Goenka Public School</h3>
              <div className="subheading">Class 12</div>
              <div>
                <p>Year: 2017<br />Result: 95.5%</p>
              </div>
              <div className="subheading">Class 10</div>
              <div>
                <p>Year: 2015
                <br />Result: 10 CGPA</p>
              </div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2003-2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <img src={cpp} alt="c" height="54px" width="55px"/>
            </li>
            <li className="list-inline-item">
              <img src={jsx} alt="js" height="48px" width="48px" />
            </li>
            <li className="list-inline-item">
              <img src={reactx} alt="react" height="48px" width="48px" />
            </li>
            <li className="list-inline-item">
              <img src={nodejs} alt="js" height="48px" width="48px" />
            </li>
            <li className="list-inline-item">
              <img src={pythonx} alt="python" height="54px" width="55px" />
            </li>
            <li className="list-inline-item">
              <img src={redux} alt="redux" height="48px" width="48px" />
            </li>
            
            
            <li className="list-inline-item">
              <img src={cssx} alt="css" height="42px" width="42px"/>
            </li>
            <li className="list-inline-item">
              <img src={htmlx} alt="html" height="46px" width="48px"/>
            </li>
            
            
            
            <li className="list-inline-item">
              <img src={gitx} alt="git" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={githubx} alt="github" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={mongodb} alt="github" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={npm} alt="npm" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={webpack} alt="webpack" height="48px" width="48px"/>
            </li>
              
          </ul>
          
          <div className="subheading mb-3">Coursework</div>
          <div className="mb-3">
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Data Structures and Algorithms
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Operating Systems
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Object Oriented Programming
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Database Management System
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Machine Learning
            </li>
          </ul>
          </div>
          
          
          <div className="subheading mb-3">
          Soft-Skills
          </div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Teamwork
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Problem Solving and Creative Thinking
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Time Management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Strong Work Ethic
            </li>
          </ul>
        
        </div>
          
      </section>

      <hr className="m-0" />
      
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          
          <CardDeck>
            <Card>
              <Card.Header>October'20 - November'20</Card.Header>
              <Card.Img variant="top" src={mern} fluid/>
              <Card.Body style={{marginBottom: '0'}}>
                <Card.Title>Mern Ecommerce App</Card.Title>
                <Card.Text>
                  <ol style={{ listStyle: 'circle' }}>
                    <li style={{ 'margin-bottom': '5px' }}>E-Commerce Website using <strong>React, Redux, Node, Express & MongoDB</strong></li>
                    <li style={{ 'margin-bottom': '5px' }}><strong>PayPal & credit/debit Integrated to replicate payments</strong></li>
                    <li style={{ 'margin-bottom': '5px' }}><strong>Product rating & review system</strong></li>
                    <li>Admin area to manage customers, products & orders</li>
                    
                  </ol>
                  <Container>
                    <Row>
                      <Col md={4} xs={4} sm={4} style={{ paddingLeft: '0', paddingRight: '0', paddingTop: '15px' }}>
                        Built Using
                      </Col>
                      <Col md={4} xs={4} sm={4}>
                        <img src={nodejs} alt="nodejs" height="45px" width="45px" />
                      </Col>
                      <Col md={4} xs={4} sm={4}>
                        <img src={reactx} alt="react" height="48px" width="48px" />
                      </Col>
                      <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }}>
                        <img src={mongodb} alt="mongodb" height="48px" width="48px" />
                      </Col>
                      <Col md={4} xs={4} sm={4}>
                        <img src={redux} alt="redux" height="48px" width="48px" />
                      </Col>

                    </Row>
                  </Container>
                    
                </Card.Text>
              </Card.Body>

              <Card.Footer>
                <Container>
                    <Row>
                      <Col>
                        <a className='github-btn' href="https://github.com/SachRestated/Ecommerce-Mern-App">
                          <Button variant="outline-success" className='github-btn'>
                            Github Repo
                          </Button>
                        </a>
                      </Col>
                      <Col>
                        <a className='app-btn' href="https://mern-app-shop.herokuapp.com/">
                          <Button variant="outline-info" className='app-btn'>
                            Check it out
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Container>
              </Card.Footer>

            </Card>


            <Card>
              <Card.Header>October'20 - November'20</Card.Header>
              <Card.Img variant="top" src={chat} fluid />
              <Card.Body>
                <Card.Title>Chat Application</Card.Title>
                <Card.Text>
                  <ol style={{ listStyle: 'circle' }}>
                    <li style={{ 'margin-bottom': '5px' }}>A Real-time Chat-Application developed using <strong>Express and Socket.IO Libraries.</strong></li>
                    <li style={{ 'margin-bottom': '5px' }}><strong>Join an active chat room or make your own chat rooms</strong></li>
                    <li style={{ 'margin-bottom': '5px' }}><strong>Prevents users from using Profane and Abusive English words</strong> in chats</li>
                    
                  </ol>

                  <Container>
                    <Row>
                      <Col md={4} xs={4} sm={4} style={{ paddingLeft: '0', paddingRight: '0', paddingTop: '15px' }}>
                        Built Using
                      </Col>
                      <Col md={4} xs={4} sm={4}>
                          <img src={jsx} alt="js" height="45px" width="45px" />
                      </Col>
                      <Col md={4} xs={4} sm={4}>
                          <img src={nodejs} alt="nodejs" height="48px" width="48px" />
                      </Col>
                      <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }}>
                          <img src={cssx} alt="css" height="45px" width="45px" />
                      </Col>
                      <Col md={4} xs={4} sm={4}>
                        <img src={htmlx} alt="html" height="48px" width="48px" />
                      </Col>

                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>


              <Card.Footer>
                <Container>
                  <Row>
                    <Col>
                      <a className='github-btn' href="https://github.com/SachRestated/Chat-App">
                        <Button variant="outline-success" className='github-btn'>
                          Github Repo
                          </Button>
                      </a>
                    </Col>
                    <Col>
                      <a className='app-btn' href="https://sach-chat-app.herokuapp.com/">
                        <Button variant="outline-info" className='app-btn'>
                          Check it out
                          </Button>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>


            
          </CardDeck>

          <CardDeck style={{marginTop: '40px'}}>
            
            <Card>
              <Card.Header>June'20 - July'20</Card.Header>
              <Card.Img variant="top" src={expense} fluid />
              <Card.Body>
                <Card.Title>Expenses Manager App</Card.Title>
                <Card.Text>
                  <ol style={{ listStyle: 'circle' }}>
                    <li style={{ 'margin-bottom': '5px' }}>An Expenses Manager App with <strong>support for Authentication , User
Accounts, Routing, Form Validation, Database Storage</strong>.</li>
                    <li style={{ 'margin-bottom': '5px' }}><strong>Track expenses based on Description, Amount or search for a
specific time frame.</strong></li>
                    
                  </ol>
                  <Container>
                    <Row>
                      <Col md={3} xs={3} sm={3} style={{paddingLeft: '0', paddingRight: '0', paddingTop: '15px'}}>
                        Built Using
                      </Col>
                      <Col md={9} xs={9} sm={9} style={{ paddingLeft: '0', paddingRight: '0' }}>
                        <ul className="list-inline dev-icons">
                          <li className="list-inline-item" style={{height: '55px'}}>
                            <img src={jsx} alt="js" height="45px" width="45px" />
                          </li>
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={firebase} alt="firebase" height="48px" width="48px" />
                          </li>
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={reactx} alt="react" height="46px" width="46px" />
                          </li>
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={redux} alt="redux" height="48px" width="48px" />
                          </li> 
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={webpack} alt="webpack" height="48px" width="48px" />
                          </li>
                          

                        </ul>
                      </Col>
                    </Row>
                  </Container>            

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Container>
                  <Row>
                    <Col>
                      <a className='github-btn' href="https://github.com/SachRestated/Expensify-App-Redux">
                        <Button variant="outline-success" className='github-btn'>
                          Github Repo
                            </Button>
                      </a>
                    </Col>
                    <Col>
                      <a className='app-btn' href="https://expensify-app-redux.herokuapp.com/">
                        <Button variant="outline-info" className='app-btn'>
                          Check it out
                            </Button>
                      </a>
                    </Col>
                  </Row>
                </Container>  
              </Card.Footer>
              
            </Card>

            <Card>
              <Card.Header>July'19 - August'19</Card.Header>
              <Card.Img variant="top" src={hangman} fluid />
              <Card.Body>
                <Card.Title>Hangman Game</Card.Title>
                <Card.Text>
                  <ol style={{listStyle: "circle", textAlign: "justify"}}>
                    <li style={{ 'margin-bottom': '5px' }}>A recreation of the popular Hangman Game. The aim is to <strong>guess the
    hidden word represented by a row of dashes</strong></li>
                    <li style={{ 'margin-bottom': '5px' }}>Incorrect guesses result in drawing of an element 
                    of a hanged man stick. Game continues till the player guesses all the letters or till the 
                    stick man is hanged completely.</li> 
                  </ol>

                  <Container>
                    <Row>
                      <Col xl={3} md={3} xs={3} sm={3} style={{ paddingLeft: '0', paddingRight: '0', paddingTop: '25px' }}>
                        Built Using
                      </Col>
                      <Col xl={9} md={9} xs={9} sm={9} style={{ paddingLeft: '0', paddingRight: '0' }}>
                        <ul className="list-inline dev-icons">
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={jsx} alt="js" height="45px" width="45px" />
                          </li>
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={reactx} alt="react" height="46px" width="46px" />
                          </li>
                          
                        </ul>
                      </Col>
                    </Row>
                  </Container>       

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Container>
                  <Row>
                    <Col>
                      <a className='app-btn' href="https://sachrestated.github.io/HangmanGame/">
                        <Button variant="outline-info" className='app-btn'>
                          Check it out
                            </Button>
                      </a>
                    </Col>
                  </Row>
                </Container>  
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header>July'19 - August'19</Card.Header>
              <Card.Img variant="top" src={color} />
              <Card.Body>
                <Card.Title>RGB Color Guessing Game</Card.Title>
                <Card.Text>
                  <ol style={{ listStyle: "circle", textAlign:'justify' }}>
                    <li style={{ 'margin-bottom': '5px' }}>A simple color identification game, involving a given random RGB value,
the goal is to <strong>guess the color corresponding to that RGB value</strong>, among
various choices.</li>
                    <li style={{ 'margin-bottom': '5px' }}>
                      2 Difficulty Level Modes (Easy and Hard) with different number of choices.
                    </li>

                  </ol>

                  <Container>
                    <Row>
                      <Col xl={3} md={3} xs={3} sm={3} style={{ paddingLeft: '0', paddingRight: '0', paddingTop: '25px' }}>
                        Built Using
                      </Col>
                      <Col xl={9} md={9} xs={9} sm={9} style={{ paddingLeft: '0', paddingRight: '0' }}>
                        <ul className="list-inline dev-icons">
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={jsx} alt="js" height="45px" width="45px" />
                          </li>
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={cssx} alt="css" height="46px" width="46px" />
                          </li>
                          <li className="list-inline-item" style={{ height: '55px' }}>
                            <img src={htmlx} alt="html" height="46px" width="46px" />
                          </li>
                          
                        </ul>
                      </Col>
                    </Row>
                  </Container>

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Container>
                  <Row>
                    <Col>
                      <a className='app-btn' href="https://sachrestated.github.io/ColorGame/game.html">
                        <Button variant="outline-info" className='app-btn'>
                          Check it out
                            </Button>
                      </a>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>
          </CardDeck>


          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <div>
            <img src={reading} alt="reading" height="24%" width='18%'/>
            <img src={webdev} alt="webdev" height="24%" width='22%' style={{ marginLeft: '4%' }}/>
            <img src={ai} alt="ai" height="24%" width='20%' style={{ marginLeft: '4%' }}/>
            <img src={blog} alt="webdev" height="24%" width='20%' style={{ marginLeft: '4%' }}/>
          </div>
          <div style={{textAlign: "justify"}}>
          <p>
            Apart from being a Web Developer and a Competitive Programmer, I ardently follow Football and Cricket. 
            I love playing Table Tennis, Chess and Badminton as well.
          </p>
          <p className="mb-0">
              When forced indoors,  I follow a number of motivational self-help books, newsletters 
              and blogs. I have started blogging actively on <a href="https://sachinvashisht.hashnode.dev">
              Hashnode</a> and <a href="https://dev.to/devdios">Dev</a>, and I spend a 
              large amount of my free time exploring the latest technology advancements in the 
              web development and AI (Artificial Intelligence) world.
          </p>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Achievements</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://drive.google.com/file/d/1OCzO-5GID7giczocYCzkQb27In5Xw1ir/view?usp=sharing">Google Kickstart Round E 2020 Global Rank : 210</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://drive.google.com/file/d/17M6keN2m-020ZoFgqjAUY20LEImhE71U/view?usp=sharing">Google Kickstart Round D 2020 Global Rank : 900</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Completed LeetCode’s 30-day-Coding Challenge(April 2020)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Completed LeetCode’s May Challenge(May 2020)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Scholar Badges Recognition in school for 10 consecutive years
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Secured 3rd Position in Presidium School Model United Nations(MUN) in 2015
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
