import Calc from "./assets/BothCalcs/Calc.png"

export default function Calculator() {
    return (
        <>
            <article>             
               <header>
        	<a href="/">
          		<input type="button" value={ "Home" }/>
        	</a>
        	<a href="/resume">
          		<input type="button" value={ "Resumé" }/>
        	</a>
			<a href="/Credentials">
          		<input type="button" value={ "Certifications" }/>
        	</a>
			<a href="/Projects">
          		<input type="button" value={ "Projects" }/>
        	</a>
      	</header>
                <h1>
                    Scientific Calculator App (MATLAB)
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
            The goal of this project was to develop an interactive and multifunctional calculator application using MATLAB App Designer. This app provides a streamlined interface for performing essential arithmetic operations, angle conversions, and phasor analysis. The project focused on:                                  <ul>
                        <li>
                        Delivering a clean, intuitive layout for user interaction</li>
                        <li>
                        Automating complex calculations such as phasor-to-polar conversions
                        </li>
                        <li>
                        Visualizing results through dynamic graph plotting in the complex plane                        </li>
                    </ul>
                </p>

                <h4>
                    App  Overview
                </h4>
                <p>
            User  Needs: A compact, reliable tool to compute arithmetic operations, convert angle units, and visualize phasors.
                </p>
                <p>
                    Explicit Features:
                    <ul>
                        <ul>
                            <li>
                            Input fields for operands and operation mode selection</li>
                            <li>
                            Support for basic arithmetic: addition, subtraction, multiplication, division     </li>
                        </ul>
                        <ul>
                            <li>
                            Angle conversions between radians and degrees (and vice versa)    </li>
                             <li>
                            Phasor conversion to amplitude and phase representation     </li>
                            <li>
                            Live plotting of phasors on the complex plane (imaginary vs. real axes)      </li>
                        </ul>
                    </ul>
                </p>

                <hr className="rounded"></hr>

              <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ Calc }/>
                    </span>
               
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    MATLAB, App Designer, GUI Components, MATLAB plotting
                </p>

            </article>
        </>
    )
}