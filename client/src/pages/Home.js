import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../pages/styles/Home.css';


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Christopher</h2>
        <div className="prompt">
          <p> A Junior Web Developer With Vanilla Skills and a Hot Fudge Attitude.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, BootStrap, TailwindCSS, AnimeJS, ReactJS,</span>
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
  );
}

export default Home;
