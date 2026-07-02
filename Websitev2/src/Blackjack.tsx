import Bj from "./assets/BlackJack/Bj.png"
import Bjmenu from "./assets/BlackJack/Bjmenu.png"

export default function Blackjack() {
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
                Black Jack Card Game Development
                </h1>
                <hr className="rounded"></hr>
                <br/><h4>
                    Goal
                </h4>
                <p>
                    The goal of the project was to build a fully functional Blackjack game using Godot and C#. The project focused on:
                    <ul>
                        <li>
                        Implementing classic Blackjack mechanics (player and dealer actions, betting, win/loss conditions).
                        </li>
                        <li>
                        Designing a responsive and intuitive user interface for a smooth gaming experience.
                        </li>
                        <li>
                        Incorporating betting and balance systems to allow for a more immersive and customizable experience.
                        </li>
                    </ul>
                </p>

                <h4>
                    Game Overview
                </h4>
                <p>
Player Needs: A traditional Blackjack experience with a user-friendly interface, clear feedback on the game status (win, loss, tie), the ability to place bets, and a system that tracks balance.
                </p>
                <p>
                    Explicit Features:
                    <ul>
                        <ul>
                            <li>
                        Betting System: Players can place bets before each round, with their balance updated accordingly based on the outcome (win/loss).
                            </li>
                            <li>
                        Game Outcome Feedback: The game notifies the player if they win, lose, or tie, and prompts them to either retry the round or return to the main menu.
                            </li>
                        </ul>
                        <ul>
                            <li>
                        Balance Tracking: Displays the player’s current balance and allows for continued play based on available funds.
                            </li>
                             <li>
                        Intuitive UI: The layout includes a clear representation of cards for both the player and the dealer, along with buttons for actions (hit, stand, etc.).
                            </li>
                            <li>
                        Retry or Main Menu Option: After each round, players can either try again or return to the main menu.
                            </li>
                        </ul>
                    </ul>
                </p>

                <h4>
                    Conclusions
                </h4>
                <p>
This project demonstrated, full integration of game logic and user interface design using Godot’s scripting system. Effective use of object-oriented principles (e.g., Card and Deck classes) for handling gameplay mechanics. A responsive and scalable UI that dynamically adjusts to different screen sizes, ensuring accessibility and a polished look. A fun, engaging game loop with clear feedback on player actions, winning or losing outcomes, and balanced decision-making.
                </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ Bjmenu }/>
                        <img src={ Bj }/>
                    </span>
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    
               C#, Godot Engine, 2D assets, Sprites, Animations, 
                </p>

            </article>
        </>
    )
}