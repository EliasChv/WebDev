import Slotsvideo from "./assets/BothCalcs/Slotsvideo.mp4"

export default function Slots() {
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
      	</header>
                <h1>
                Slot Machine Game
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                The goal of this project was to design and develop a sleek and engaging slot machine game using C# in the Godot Engine. The focus was on delivering polished mechanics, vibrant visuals, and rewarding user interactions within a casual gaming experience.                  
                </p>

                <h4>
                    App Overview
                </h4>
                <p>
                User Needs: An entertaining and responsive slot machine experience with smooth reel animations, intuitive controls, and a fun twist with cats.
                </p>
                <p>
                    Features:
                    <ul>
                        <ul>
                            <li>
                                Simple one-click spin with animated, randomized reel behavior                            </li>
                              <li>
                                Score tracking system, even when logging out the game.                            </li>
                              <li>
                                Win conditions
                            </li>
                        </ul>
                    </ul>
                    <ul>
                    </ul>

                </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal">
                        <video src={ Slotsvideo } controls autoPlay muted/>
                    </span>
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    
               C#, Godot Engine, 2D assets, Sprites
                </p>

            </article>
        </>
    )
}