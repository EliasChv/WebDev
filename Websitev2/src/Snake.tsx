import snake2 from "./assets/Projects/snake2.png"
import snake3 from "./assets/Projects/snake3.png"

export default function Snake() {
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
          		<input type="button" value={ "Credentials" }/>
        	</a>
			<a href="/Projects">
          		<input type="button" value={ "Projects" }/>
        	</a>
      	</header>
                <h1>
                    Game Design: Snake Game in Godot
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                The goal of this project was to build a fully playable Snake game in Godot using C#. This project focused on:
                    <ul>
                        <li>
                            Implementing core game mechanics (snake movement and food spawning.
                        </li>
                        <li>
                            Creating a responsive user interface.
                        </li>
                        <li>
                            Allowing different color themes and schemes.
                        </li>
                    </ul>
                </p>

                <h4>
                    Game Overview
                </h4>
                <p>
            Player Needs:  A classic Snake game experience with responsive controls, smooth gameplay, and clear visual feedback. Features include difficulty adjustment, dynamic gameplay, and customizable user interface.
                </p>
                <p>
                    Explicit Features:
                    <ul>
                        <ul>
                            <li>
                                Dynamic Snake Growth: Snake increases in length as it eats food, growing more challenging to maneuver.
                            </li>
                            <li>
                                Responsive Controls: Arrow keys (or WASD) for smooth snake movement.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Dynamic tile revealing (recursive for empty tiles).
                            </li>
                             <li>
                                Animated Game-over Screen: Displaying a smooth transition when the game ends, with options to restart or return to the main menu.
                            </li>
                        </ul>
                    </ul>
                </p>

                <h4>
                    Conclusions
                </h4>
                <p>
                        Full integration of gameplay logic, UI, and rendering using Godot's scripting and canvas systems. Effective use of object-oriented principles (e.g., Snake and Food classes for abstraction). Custom methods for dynamic game mechanics (e.g., Snake movement, collision detection).
                   </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ snake2 }/>
                        <img src={ snake3 }/>
                    </span>
               
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    C#, Godot Engine, 2D Canvas Drawing API, Sprites
                </p>

            </article>
        </>
    )
}