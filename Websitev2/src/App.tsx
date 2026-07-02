// import { useState } from 'react'


import logo from "./assets/GatesND.png"
import pong from "./assets/Pongchip.png"
import drone from "./assets/Dronepic.png"
import research from "./assets/research.png"

function App() {
  return (
    <>
      <article>
        <header>
          <a href="/">
            <input type="button" value="Home" />
          </a>
          <a href="/resume">
            <input type="button" value="Resumé" />
          </a>
          <a href="/Credentials">
            <input type="button" value="Certifications" />
          </a>
          <a href="/Projects">
            <input type="button" value="Projects" />
          </a>
          <img src={logo} alt="Gates ND Logo" className="logo" />
        </header>

        <section>
          <h1>Elias Chavelaz</h1>
          <hr className="rounded"></hr>
          <br/>

          <div className="icons">
            <a href="http://www.linkedin.com/in/elias-chavelaz" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 128 128">
                <path d="M 39.17 107 H 21.06 V 48.73 h 18.11 z m -9 -66.21 a 10.5 10.5 0 1 1 10.49 -10.5 a 10.5 10.5 0 0 1 -10.54 10.48 z M 107 107 H 88.89 V 78.65 c 0 -6.75 -0.12 -15.44 -9.41 -15.44 s -10.87 7.36 -10.87 15 V 107 H 50.53 V 48.73 h 17.36 v 8 h 0.24 c 2.42 -4.58 8.32 -9.41 17.13 -9.41 C 103.6 47.28 107 59.35 107 75 z"></path>
              </svg>
            </a>
            <a href="https://github.com/EliasChv" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 128 128">
                <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
            </a>
            <a href="https://app.joinhandshake.com/profiles/tuuv6n" target="_blank" rel="noopener noreferrer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.728 0 16.49 24h-4.583l1.87-10.532-4.743 3.893L7.856 24H3.272L7.51 0h4.582L9.806 13.012l4.729-3.862L16.145 0h4.583z"/>
              </svg>
            </a>
          </div>

          <p>
            Electrical Engineering Student at the University of Notre Dame. This is my portfolio website showcasing my projects, skills, and experience as a web developer, game designer, and Electrical Engineer. Explore my projects, learn more about my professional journey, and connect with me through the links above.
          </p>

          <hr className="rounded"></hr>
          <br/>

          <h4>Recent Activities</h4>
          <br/>

          <div className="list">
            <span className="horizontal">
              <span className="verticle">
                <h3>Pong IC Chip</h3>
                <p>
                  Designed and fabricated a fully functional integrated circuit that plays the classic Pong game using Cadence design tools and Verilog HDL. The chip was manufactured using TSMC's semiconductor process, incorporating digital logic design, timing constraints, and physical layout optimization to create a working game system on silicon.
				  </p>
              </span>
              <img src={pong} alt="Pong Chip Project" />
            </span>

            <span className="horizontal">
              <span className="verticle">
                <h3>DTRA Drone Challenge</h3>
                <p>
                  Engaged in the DTRA IIRM Fall 2025 Drone Challenge through a virtual drone simulation platform focused on autonomous navigation and radiation source detection. Ran mission simulations to collect and analyze radiation sensor data, supporting algorithm training and evaluation for locating hidden radiation sources. Contributed to testing navigation logic, mission planning strategies, and performance tradeoffs in complex simulated environments.
                </p>
              </span>
              <img src={drone} alt="Drone Project" />
            </span>

            <span className="horizontal">
              <span className="verticle">
                <h3>RF Remote Sensing System Calibration & Verification Research</h3>
                <p>
                  Performed semester-long research in RF remote sensing, restoring and recalibrating a legacy multi-channel RF system built on NI PXIe vector signal transceivers. Using LabVIEW-based calibration frameworks, I validated system performance across multiple hardware configurations, resolved synchronization and signal integrity issues, and established a stable baseline to support future software and hardware upgrades.
                </p>
              </span>
              <img src={research} alt="research" />
            </span>
          </div>
        </section>
      </article>
    </>
  )
}

export default App