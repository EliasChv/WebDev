import Graph1 from "./assets/WaterValve/Graph1.png"
import graph2 from "./assets/WaterValve/graph2.png"
import postvalve from "./assets/WaterValve/postvalve.png"
import prevalve from "./assets/WaterValve/prevalve.png"


export default function WaterValve() {
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
                    Water Valve Prototyping and Fabrication
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                    The project aimed to design a valve system capable of accurately controlling water flow for a chlorination-based disinfection system. The client, a non-profit organization, required a waterproof, temperature-resistant valve that integrates with a motor and microcontroller to release chlorinated water safely and effectively. The valve needed to:
                    <ul>
                        <li>
                            Mix hot and cold water to a target temperature
                        </li>
                        <li>
                        Minimize leakage in both open and closed positions                   
                        <li>
                            Interface with sensors and motorized controls
                        </li>
                        Be printed within 7 hours and be lightweight and simple in appearance
                        </li>
                        
                    </ul>
                </p>

                <h4>
                    Procedure
                </h4>
                 <br/>
                  <h4>
                    First Design Cycle
                </h4>
                <p>
                  Chose a cylindrical valve over more complex forms like a gate valve due to ease of modeling in SolidWorks and concerns over leakage and print time. Created a motor interface, tube connectors, and an internal rotating cylinder to block/unblock flow.

                    <ul>
                        <li>
                           Tested valve for:
                        </li>
                        <ul>
                            <li>
                                Leakage in closed position
                            </li>
                            <li>
                                Flow rate in open position
                            </li>
                            <li>
                                Mixing accuracy to reach a target water temperature (90°F)
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <li>
                        Encountered issues:
                        </li>
                        <ul>
                            <li>
                                Manual rotation due to improper motor connector sizing
                            </li>
                            <li>
                                Excessive leakage in closed position
                            </li>
                             <li>
                                Year vs Frequency
                            </li>
                            <li>
                                Inaccurate temperature control
                            </li>
                        </ul>
                    </ul>
                </p>

                <h4>
                    Second Design Cycle
                </h4>
                <p>
                         <ul>
                        <li>
                        Tests repeated for leakage, flow effectiveness, and temperature control with updated target of 87°F
                        </li> 
                             <br/>
                        <li>
                        Compared design performance against class data on print time, leakage and open effectiveness
                        </li>
                    </ul>
                    <ul>
                        <li>
                           Redesign improvements included:
                        </li>
                        <ul>
                            <li>
                                Reduced mass (by 56%) through internal hollowness and shortened length
                            </li>
                            <li>
                                Improved motor interface by decreasing connector diameter
                            </li>
                            <li>
                                Tapered tube connectors for reduced leakage
                            </li>
                            <li>
                                Decreased clearance between internal and external cylinders to limit leakage
                            </li>
                        </ul>
                    </ul>
               
                </p>


                <h4>
                    Findings
                </h4>
                <p>
                      <ul>
                        <li>
                           Iteration 1:
                        </li>
                        <ul>
                            <li>
                                Closed effectiveness (leakage): High leakage (avg. 80 mL)
                            </li>
                            <li>
                                Open effectiveness: High (90–93.5%)
                            </li>
                            <li>
                                Temperature accuracy: Poor, with observed temps 93–98°F vs target of 90°F
                            </li>
                            <li>
                                Discharge coefficient: Low (32–65%)
                            </li>
                              <li>
                                Issues: Manual operation led to timing inaccuracies, poor motor integration, and flawed tubing connection
                            </li>
                        </ul>
                    </ul>

                       <ul>
                        <li>
                           Iteration 2:
                        </li>
                        <ul>
                            <li>
                                Closed effectiveness (leakage): Improved (avg. 55 mL), though still above class average
                            </li>
                            <li>
                                Open effectiveness: Excellent (98.5–100%)
                            </li>
                            <li>
                                Temperature accuracy: Closer to target (observed 89–93°F vs target 87°F)
                            </li>
                            <li>
                                Discharge coefficient: Improved (54–77%)
                            </li>
                        </ul>
                    </ul>
                    
                </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ Graph1 }/>
                        <img src={ graph2 }/>
                    </span>
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ postvalve }/>
                        <img src={ prevalve }/>
        
                    </span>
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    SolidWorks , 3D Printer, Motor , Microcontroller, Excel
                </p>

            </article>
        </>
    )
}