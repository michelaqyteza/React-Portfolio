import React from 'react';
import "./style.css"

function body() {
  return (
    <div>
      <div className="header">
        <h1>Michela Qyteza</h1>
        <p>My Portfolio</p>
      </div>

      <div className="navbar">
        <a href="#active" className="active">Home</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a href="./Resume.pdf">Resume</a>
      </div>

      <div className="row">
        <div id="active" className="main">
          <h2>About Me</h2>
          <img src="/img/Picture-of-me.jpg" className="picture" alt="me" />
          <p> I am a quick learner and am looking to grow. I live in
          New Hartford Connecticut. I recently graduated at Northwestern Connecticut Community College
          with my associated degree in Computer Systems Technology. I am increasing my education and im currently
          at UConn taking a coding boot camp course. After receiving my coding certificate from UConn, I would
          like get an internship somewhere to learn more and grow my knowledge
          and hopefully be the best that I can be before looking for my career job.
                I am a hard worker and a fast learner and will put my all into doing my job efficiently.</p>

        </div>
        <div id="experience" className="main">
          <h2>Experience</h2>
          <p>My experience is minimal, yet everyday I learn more and more and I am
          becoming more proficient with coding. Im starting to get comfortable with HTML5, CSS3, JavaScript,
          jQuery, Bootstrap,
          Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git. We will also be
          learning additional technologies such as
          Python, Java C#, and Amazon Web Services. Below I have attached homework and projects throughout my
          journey at UConn.
            </p>
          <br />
          <h2> My Work</h2>
          <div id="work" className="projects">
            <div className="homework-1">
              <p>Horiseon</p>
              <a href="https://michelaqyteza.github.io/Homework-1/">
                <img src="Assets/img/Horiseon-picture.png" className="homework-1" /></a>
            </div>

            <div className="homework-1">
              <p>Project 1</p>
              <a href="https://michelaqyteza.github.io/Project-1/">
                <img src="Assets/img/project1-screenshot.png" className="homework-1" /></a>
            </div>

            <div className="homework-1">
              <p>Weather Dashboard</p>
              <a href="https://michelaqyteza.github.io/Homework-6/">
                <img src="Assets/img/weatherdashboardscreenshot.png" className="homework-1" /></a>
            </div>

            <div className="homework-1">
              <p>Work Day Scheduler</p>
              <a href="https://michelaqyteza.github.io/Homework-5/">
                <img src="Assets/img/workdayschedulescreenshot.png" className="homework-1" /></a>
            </div>
            <div className="homework-1">
              <p>Project-2</p>
              <a href="https://github.com/michelaqyteza/My-Total-Health">
                <img src="Assets/img/project2screenshot.png" className="homework-1" /></a>
            </div>
            <div className="homework-1">
              <p>Note Taker</p>
              <a href="https://github.com/michelaqyteza/NoteTaker">
                <img src="Assets/img/notetakerscreenshot.png" className="homework-1" /></a>
            </div>
            <div className="homework-1">
              <p>E-Commerce</p>
              <a href="https://github.com/michelaqyteza/E-commerce">
                <img src="Assets/img/ecomscreenshot.png" className="homework-1" /></a>
            </div>
            <div className="homework-1">
              <p>Read-Me Generator</p>
              <a href="https://github.com/michelaqyteza/ReadMe-Generator">
                <img src="Assets/img/readmegenscreenshot.png" className="homework-1" /></a>
            </div>
            <div className="homework-1">
              <p>Coming Soon...</p>
              <a href="">
                <img src="Assets/img/workinprogress.png" className="homework-2" /></a>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="footer">
        <h2>Contact Me </h2>
        <p> <b>Email:</b> Michelaq1997@gmail.com</p>
        <p> <b>Phone Number: </b>(860) 782-1279</p>
        <p> <b>GitHub Link:</b>
          <a href="https://github.com/michelaqyteza">HERE</a>
        </p>
        <p> <b>LinkedIn Link:</b>
          <a href="https://www.linkedin.com/in/michela-qyteza-705154207/">HERE</a>
        </p>

      </div>
    </div>
  )
}

export default body;
