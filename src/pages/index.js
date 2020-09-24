import React from 'react';

import Layout from '../components/Layout';

import cpp from '../assets/images/c++.png' ;
import htmlx from '../assets/images/html5.svg';
import cssx from '../assets/images/css3.svg';
import reactx from '../assets/images/react.svg';
import jsx from '../assets/images/javascript.svg';
import gitx from '../assets/images/git.svg';
import githubx from '../assets/images/github.svg';
import pythonx from '../assets/images/python.svg';
import redux from '../assets/images/redux.svg';
import sass from '../assets/images/sass.svg'
import firebase from '../assets/images/firebase.svg';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

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
            I am a Final Year Undergraduate currently pursuing bachelors in Information Tehnology from Delhi Technological University.
            I am a Web Developer and a Competitive Programmer. I have a strong foundation of Data Structures, Algorithms, Web Development, Problem Solving and
            fundamentals of Computer Science.
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
              <img src={pythonx} alt="python" height="54px" width="55px"/>
            </li>
            <li className="list-inline-item">
              <img src={jsx} alt="js" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={cssx} alt="css" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={htmlx} alt="html" height="54px" width="55px"/>
            </li>
            
            <li className="list-inline-item">
              <img src={reactx} alt="react" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={redux} alt="redux" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={gitx} alt="git" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={githubx} alt="github" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={sass} alt="sass" height="48px" width="48px"/>
            </li>
            <li className="list-inline-item">
              <img src={firebase} alt="firebase" height="48px" width="48px"/>
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

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
            <h3 className="mb-0">Expenses Manager App</h3>
              <ol style={{listStyle: 'circle'}}>
                <li>An Expenses Manager App with support for authentication , user
accounts, routing, form validation, database storage.</li>
                <li>Allows users to store, track, maintain and edit personal expenses over
time. Track expenses based on Description, Amount or search for a
specific time frame.</li>
                <li>Allows users to store, track, maintain and edit personal expenses over
time. Track expenses based on Description, Amount or search for a
specific time frame.</li>
                <li>App deployed at <a href="expensify-app-redux.herokuapp.com/">Heroku</a> with source code available at <a href="https://github.com/SachRestated/Expensify-App-Redux">Github</a> repository</li>
              </ol>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June'20 - July'20</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">HANGMAN GAME</h3>
              <ol style={{listStyle: "circle", textAlign: "justify"}}>
                <li>A recreation of the popular Hangman Game. The aim is to guess the
hidden word represented by a row of dashes, representing each letter of
that ’mystery’ word.</li>
                <li>Each incorrect guess results in drawing of an element of a hanged man stick figure as a tally mark.
                The game continues till the player guesses all the letters or till the stick man is hanged completely.</li> 
                <li>Created using ReactJS Library and ES6 JavaScript.<a href="https://sachrestated.github.io/HangmanGame/">Link to the game </a></li>
              </ol>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July'19 - August'19</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">RGB Color Game</h3>
              <ol style={{listStyle: "circle", textAlign: "justify"}}>
                <li>A simple color identification game, involving a given random RGB value,
the goal is to guess the color corresponding to that RGB value, among
various choices. Created using HTML, CSS and JavaScript.</li>
                <li>Each incorrect guess results in drawing of an element of a hanged man
stick figure as a tally mark. The game continues till the player guesses all
the letters or till the stick man is hanged completely. </li>
                <li>2 Difficulty Level Modes (Easy and Hard) with different number of choices. Created using ES6 JavaScript, HTML and CSS. <a href="https://sachrestated.github.io/ColorGame/game.html">Link to the game </a></li>
              </ol>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May'19 - June'19</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <div style={{textAlign: "justify"}}>
          <p>
            Apart from being a web developer and a competitive programmer, I ardently follow football and cricket. 
            I love playing Table Tennis, Chess and Badminton as well.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of motivational self-help books, newsletters and blog posts. I am an aspiring blogger(as a side interest), and I spend a
            large amount of my free time exploring the latest technology
            advancements in the web development and AI (Artificial Intelligence) world.
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
