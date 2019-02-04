import React, { Component } from 'react';
import './App.css';

function App(props) {
  
  
  return (
    
    <main>
      <header><h1>{props.name} - Resume</h1></header>
        <section className='education'>
        <h3>I went to Hahvahd in Cambridge, MA</h3>
        </section>
        <section className='experience'>
        <h3>Job Experience</h3>
        <ul>
        <li>Full Stack Dev - Googly - Cupertino, CA
          <ul>
            <li> Making full web apps that get cancelled within 1 year. </li>
            </ul>
          </li>
        <li>Front End Dev - Appley - Cupertino, CA
            <ul>
            <li> Making websites pretty.</li>
            </ul>
          </li>
          </ul>
        </section>
      <section className='skills'>

        </section>
      <address>
        <h3>Contact Me</h3>
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="profile picture of sally student" />
        <p>Written by Sally Student</p>
        <p>Contact me at <a href='mailto:#'>EMAIL</a>, 555-555-5555, or visit me at Box 564, Disneyland, USA.</p>
        </address>
      </main>
  );
}

App.defaultProps = {
  name: ''
};

export default App;
