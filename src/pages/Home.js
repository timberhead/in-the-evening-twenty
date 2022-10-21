import React from 'react'
import { LinkedIn, Email, GitHub } from '@mui/icons-material'
import image from "../assets/images/image5.jpeg";

import '../pages/styles/Home.css'

const Home = () => {
  return ( 
    <div className="home">
      <div className="about-image"></div>
      <div className="about">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <img src={image} width="200px" border-radius="50%"/>
        <h2> Hi, My Name is Christopher</h2>
        <p></p>
        <p></p>
        <div className="prompt">
          <p>
            A Junior Web Developer With Vanilla Skills and a Hot Fudge Attitude.
          </p>
          <LinkedIn />
          <Email />
          {/* <link to="/Email">
            <Email className="Email" variant="primary">
          </Email>
          </link> */}
          <GitHub />
        </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="skills-hero">
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
