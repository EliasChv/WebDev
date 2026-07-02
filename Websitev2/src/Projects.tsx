import logo from "./assets/GatesND.png"
import data from "./assets/home/c++data.png"
import energy from "./assets/home/energy.png"
import watervalve from "./assets/home/watervalve.png"
import print from "./assets/home/print.png"
import minesweeper from "./assets/home/minesweeper.png"
import Pregrade from "./assets/BothCalcs/Pregrade.png"
import Calc from "./assets/BothCalcs/Calc.png"
import Slots from "./assets/BlackJack/slotmenu.png"
import Bjmenu from "./assets/BlackJack/Bjmenu.png"
import snake1 from "./assets/Projects/snake1.png"
import rust1 from "./assets/Projects/rust1.png"

export default function Resume() {
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
          		<input type="button" value={ "Credentials" }/>
        	</a>
			<a href="/Projects">
          		<input type="button" value={ "Projects" }/>
            </a>
          <img src={logo} alt="Gates ND Logo" className="logo" />
        </header>

             
            <h1>
  			 Project Library
    		</h1>
			<br/>
	                <hr className="rounded"></hr>
            <h3>
  			 Data Visualization
    		</h3>

			                <span className="horizontal">
					<span className="verticle">
						<a href="/data-visualization">
							C++ Data Visualization
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
							Final projectvisualizing the specifications of the Central Processing Unit (CPU) and the Graphics Processing Unit (GPU), with an aim to determine the trend of technological advancement in the processing units throughout the years as well as explore the correlation between the specifications and compare the specifications of CPU and GPU.
						</p>
					</span>
                	<img src={ data }/>
                </span>
            <br/><br/>

    		
            <div className="list">
    			<span className="horizontal">
					<span className="verticle">
						<a href="/energy-app">
							Matlab Energy Usage App 
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
							Using Matlab, and thousands of data values for nuclear, fossil fuel, renewable and hydroelectric energy our team constructed an app to allow users to cross compare different energy usages in states. The ultimate goal for this project is to bring awareness to the sources different states get their energy from as well as to quantify the large-scale usage and production of harmful fuels. The potential users in mind for this app are environmentalists, students, researchers, and lawmakers.
						</p>
					</span>
                	<img src={ energy }/>
                </span>
			
                <hr className="rounded"></hr>

			<h3>
  			 Game Design
    		</h3>
			<span className="horizontal">
					<span className="verticle">
						<a href="/Snake">
							Snake Game
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16"> <path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
					This project implements a classic Snake Game using Godot Engine and C#, bringing a modernized version of the popular arcade game to life. The game features smooth gameplay, intuitive controls, and classic mechanics with a polished user interface.</p>
					</span>
                	<img src={ snake1 }/>
                </span>

			<span className="horizontal">
					<span className="verticle">
						<a href="/Blackjack">
							Blackjack Card Game Simulation
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
					This project presents a clean and intuitive Blackjack card game, developed using Godot and C#. It recreates the classic casino experience with smooth gameplay and essential Blackjack mechanics. Key features include a responsive betting system, clear game outcome feedback, and dynamic balance tracking. The project demonstrates effective integration of object-oriented design, including card and deck classes, paired with crisp 2D animations for a polished look.				</p>
					</span>
                	<img src={ Bjmenu }/>
                </span>

			<span className="horizontal">
					<span className="verticle">
						<a href="/Slots">
							Cat Slots Machine
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
						This project presents a sleek and user-friendly slot machine simulation, developed with Godot and C#. It delivers a streamlined gaming experience, focusing on essential slot machine functionalities. Key features include a clearly displayed balance, easily adjustable bet amounts, and persistent data saving for the player's balance upon application exit. The project includes smooth animations with cat themed visuals.
				</p>
					</span>
                	<img src={ Slots }/>
                </span>

			<span className="horizontal">
					<span className="verticle">
						<a href="/Minesweepergame">
							Minesweeper Game Desgin
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16"> <path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
                        A modern take on the classic Minesweeper game, built using C# in the Godot Engine. This project features an intuitive UI, dynamic difficulty levels, and smooth game mechanics that provide a satisfying challenge for players of all skill levels. Designed with clean, efficient code and optimized performance, it showcases the power of Godot and C# for game development.						</p>
					</span>
                	<img src={ minesweeper }/>
                </span>
              			  <hr className="rounded"></hr>
			<h3>
  			 Fabrication
    		</h3>
                 <span className="horizontal">
					<span className="verticle">
						<a href="/water-valve">
							Water Valve Fabrication
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
							The goal is to design a system that is capable of releasing chlorinated water into nearby bodies which would disinfect bodies of water. Collaborating within a team of three, to design, test and develop the two prototypes below using Soild-Works. The prototypes had to be temperature, water, and stress resistant insuring it can efficiently close and open with minimal leakage.
						</p>
					</span>
                	<img src={ watervalve }/>
                </span>


  				<span className="horizontal">
					<span className="verticle">
						<a href="/Plantproj">
							3D Printed Plant Ladder
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
                3D Printed Plant Ladder A custom-designed, modular plant holder, created to accommodate a variety of plants with different growth requirements. Developed using SolidWorks, this project went through multiple design iterations and prototypes to achieve an adaptable structure that balances functionality and aesthetic appeal. The final product leverages 3D printing technology to provide a durable, space-saving solution for plant enthusiasts.						</p>
					</span>
                	<img src={ print }/>
                </span>  

                <hr className="rounded"></hr>

			<span className="horizontal">
					<span className="verticle">
						<a href="/Toolkit">
							Rust Electrical Engineering Toolkit
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16"> <path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
					This Rust-based Electrical Engineering (EE) toolkit provides a versatile and interactive command-line interface for solving a wide range of electrical problems. The project is designed to assist engineers, students, and hobbyists with various calculations in electrical engineering, including resistor values, impedance, reactance, energy, fourier series, and more.</p>
					</span>
                	<img src={ rust1 }/>
                </span>

	     	<span className="horizontal">
					<span className="verticle">
						<a href="/Calculator">
							Scientific Calculator
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
						A versatile and intuitive scientific calculator built using MATLAB App Designer. This application delivers a clean interface for performing arithmetic operations, angle conversions, and phasor analysis with ease. Featuring real time plotting!				</p>
					</span>
                	<img src={ Calc }/>
                </span>

			<span className="horizontal">
					<span className="verticle">
						<a href="/GradeCalc">
							MATLAB Grade Calculator
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16"> <path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
				A sleek and user friendly grade calculator built using MATLAB App Designer. This project offers a modern interface for students and educators to effortlessly compute academic performance. It features customizable grading schemes, real time input validation, and instant results display for an intuitive user experience.
				</p>
					</span>
                	<img src={ Pregrade }/>
                </span>
           
            </div>


            </article>
        </>
    )
}