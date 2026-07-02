import Plantfig1 from "./assets/Plants/Plantfig1.png"
import Plantfig2 from "./assets/Plants/Plantfig2.png"
import print from "./assets/home/print.png"

export default function DataVisualization() {
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
                    Product Development & Prototyping
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                The goal of this project was to design and prototype a compact, mobile, and aesthetically pleasing plant holder using SolidWorks and 3D printing. Key objectives included:
                    <ul>
                        <li>
                            Meeting the spatial constraints of indoor settings (especially windowsills)..
                        </li>
                        <li>
                            Supporting various plant sizes with a stable and sunlight-accessible structure.
                        </li>
                        <li>
                            Iterating through design versions based on real-world testing and feedback.
                        </li>
                    </ul>
                </p>

                <h4>
                    Design Overview
                </h4>
                <p>
A plant holder was developed for: Customers: Botanists, gardeners, and indoor plant enthusiasts.
Needs Identified: A vertical design to maximize sunlight exposure, mobility while ensuring plant safety during movement, and compatibility with window sills and small living spaces.
                </p>
                <p>
                    <ul>
                        <li>
                            Explicit Requirements:
                        </li>
                        <ul>
                            <li>
                                Stable design with compartments to prevent plant tipping.
                            </li>
                            <li>
                                Size limited to 6×6×6 inches to ensure it fits on standard window sills.
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <li>
                        Design Process:
                        </li>
                        <ul>
                            <li>
                                Multiple CAD prototypes were modeled in SolidWorks and iterated.
                            </li>
                            <li>
                                The initial concept featured two floors and notched shelving for rope support. 
                            </li>
                             <li>
                                The selected prototype was submitted to EIH for review, decorated, and tested with multiple plant types.
                            </li>
                        </ul>
                    </ul>
                </p>

                <h4>
                    Conclusions
                </h4>
                <p>
This project validated the need for compact, flexible plant storage for indoor environments. The final design is: Visually appealing, Functionally sound under testing, and Well-suited for a niche but growing market of small-space gardening. Some areas for future improvment are: Adding small drainage holes in the upper shelf for trickle watering, Appling a reflective coating or attach mirrors to enhance sunlight reflection, Offering color variations to appeal to different aesthetics, and Exploring larger and taller variants to attract more diverse customers.
</p>
                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ Plantfig1 }/>
                        <img src={ Plantfig2 }/>
                        <img src={ print }/>
                    </span>
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    SolidWorks, 3D Printer, Engineering Innovation Hub 
                </p>

            </article>
        </>
    )
}