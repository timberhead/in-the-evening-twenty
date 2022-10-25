import React from 'react'
import { LinkedIn, Email, GitHub } from '@mui/icons-material'
import image from "../assets/images/image5.jpeg";
// import image from "../assets/images/image4.jpeg";
import EmailContactForm from './Contact';

import '../pages/styles/Home.css'
import { Link } from '@material-ui/icons';

const Home = () => {
  return ( 
    <div className="home">
      <div className="about-image">
        <img src={image} width="200px" border-radius="50%"/>
      </div>
      <div className="about">
        
        <h2> Hi, My Name is Christopher</h2>
        <p></p>
        <p></p>
        <div className="prompt">
          <p>
            A Junior Web Developer With Vanilla Skills and a Hot Fudge Attitude.
          </p>

          <a href="https://www.linkedin.com/in/christopher-boyle-96b017245/" target="_blank">
              <button className="btn btn-1"><LinkedIn /></button>
            </a>

          <a href="./Contact" target="_blank">
              <button className="btn btn-1"><Email /></button>
            </a>

            <a href="https://www.github.com/timberhead" target="_blank">
              <button className="btn btn-1"><GitHub /></button>
              </a>

        </div>
        
      </div>
      <div className="hero-skills">
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                HTML, CSS, BootStrap, Handlebars, TailwindCSS, AnimeJS, ReactJS,
              </span>
            </li>
            <li className="item">
              <h2> Back-End</h2>
              <span>
                NodeJS, MySQL, MongoDB, ExpressJS, GraphQL, ApolloServer,
              </span>
            </li>
            <li className="item">
              <h2> Coding Languages</h2>
              <span>HTML, CSS, JavaScript</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
    
  )
}

export default Home
