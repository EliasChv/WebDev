import menu from "./assets/minesweep/menu.png"
import game from "./assets/minesweep/game.png"

export default function Minesweepergame() {
    return (
        <>
           <article className="pictures-page">
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
                    Game Development & Design
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                The goal of the project was to build a fully playable Minesweeper game in Godot using C#. The project focused on:
                    <ul>
                        <li>
                            Implementing fundamental game mechanics (bomb placement, number hinting, tile revealing).
                        </li>
                        <li>
                            Creating a responsive and scalable user interface.
                        </li>
                        <li>
                            Allowing difficulty selection and zoom functionality for player customization.
                        </li>
                    </ul>
                </p>

                <h4>
                    Game Overview
                </h4>
                <p>
            Player Needs: Classic Minesweeper experience with multiple difficulty modes. Clear visual feedback for bombs, numbers, and revealed/hidden states. Ability to zoom in/out to improve visibility.
                </p>
                <p>
                    Explicit Features:
                    <ul>
                        <ul>
                            <li>
                                Difficulty levels: Easy (50 bombs), Normal (65 bombs), Hard (80 bombs).
                            </li>
                            <li>
                                Zoom in/out functionality for accessibility.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Dynamic tile revealing (recursive for empty tiles).
                            </li>
                             <li>
                                Responsive layout using tile drawing and font scaling with Godot’s canvas system.
                            </li>
                            <li>
                                Animated reveal-all when a bomb is triggered.
                            </li>
                        </ul>
                    </ul>
                </p>

                <h4>
                    Conclusions
                </h4>
                <p>
                        This project demonstrated: Full integration of UI and logic using Godot’s scripting and rendering systems. Effective use of object-oriented principles (e.g., Tile class abstraction).
                        Custom drawing methods allow flexible scaling and visual polish.
                        Recursive logic and animation provide a complete, engaging gameplay loop.                
                   </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ menu }/>
                        <img src={ game }/>
                    </span>
               
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    C#, Godot Engine, 2D Canvas Drawing API
                </p>

            </article>
        </>
    )
}