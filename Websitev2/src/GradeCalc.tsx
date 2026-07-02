import Postgrade from "./assets/BothCalcs/Postgrade.png"
import Pregrade from "./assets/BothCalcs/Pregrade.png"

export default function GradeCalc() {
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
                    Grade Calculator App (MATLAB)
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                    The goal of this project was to develop an interactive Grade Calculator application using MATLAB App Designer. The app allows users to input grades, assign weightings, and receive real-time final grade calculations. This project focused on:                    <ul>
                        <li>
                        Providing a user-friendly and intuitive interface for grade input and analysis.                        </li>
                        <li>
                            Automating weighted grade calculations.
                        </li>
                        <li>
                            Offering customization for grading schemes.
                        </li>
                    </ul>
                </p>

                <h4>
                    App  Overview
                </h4>
                <p>
            User  Needs: A simple, customizable tool to calculate final grades based on entered assignments, categories, and weightings.
                </p>
                <p>
                    Explicit Features:
                    <ul>
                        <ul>
                            <li>
                            Input fields for assignment names, scores, and maximum points.                            </li>
                            <li>
                            Customizable weight categories (e.g., Homework, Exams, Projects).                            </li>
                        </ul>
                        <ul>
                             <li>
                            Real-time calculation and display of the projected grade.                            </li>
                            <li>
                            Clear visualization of grade distribution using tables.                            </li>
                        </ul>
                    </ul>
                </p>

                <hr className="rounded"></hr>

              <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ Pregrade }/>
                        <img src={ Postgrade }/>
                    </span>
               
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    MATLAB, App Designer, GUI Components 
                </p>

            </article>
        </>
    )
}