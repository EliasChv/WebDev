import figure1 from "./assets/CSE_Figures/CSE_Figure1.png"
import figure2 from "./assets/CSE_Figures/CSE_Figure2.png"
import figure3 from "./assets/CSE_Figures/CSE_Figure3.png"
import figure4 from "./assets/CSE_Figures/CSE_Figure4.png"
import figure5 from "./assets/CSE_Figures/CSE_Figure5.png"
import figure6 from "./assets/CSE_Figures/CSE_Figure6.png"
import figure7 from "./assets/CSE_Figures/CSE_Figure7.png"
import figure8 from "./assets/CSE_Figures/CSE_Figure8.png"

export default function DataVisualization() {
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
                    Data Visualization
                </h1>
                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Goal
                </h4>
                <p>
                    The goal of the project is to visualize the specifications of Central Processing Units (CPUs) and Graphics Processing Units (GPUs) in order to:
                    <ul>
                        <li>
                            Determine trends in technological advancement over time.
                        </li>
                        <li>
                            Explore correlations between specifications (e.g., transistors, frequency, process size).
                        </li>
                        <li>
                            Compare the development and differences between CPUs and GPUs.
                        </li>
                    </ul>
                </p>

                <h4>
                    Data Preparation
                </h4>
                <p>
                    Dataset includes 2,185 CPUs and 2,668 GPUs, with cleaned and refined entries. Relevant specifications retained: Release Date, Process Size (nm), Thermal Design Power (W), Die Size (mm²), Number of Transistors, Frequency (MHz), and Vendor.
                </p>
                <p>
                    Used Matplot++ to generate:
                    <ul>
                        <li>
                            2x 3D plots:
                        </li>
                        <ul>
                            <li>
                                Transistors vs Process Size vs Die Size
                            </li>
                            <li>
                                Process Size vs Frequency vs Transistors
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <li>
                        4x 2D plots:
                        </li>
                        <ul>
                            <li>
                                Year vs Transistors
                            </li>
                            <li>
                                Year vs Process Size 
                            </li>
                             <li>
                                Year vs Frequency
                            </li>
                            <li>
                                Year vs Thermal Design Power
                            </li>
                        </ul>
                    </ul>
                </p>

                <h4>
                    Conclusions
                </h4>
                <p>
                    The project demonstrated, strong correlation between increased transistor count and larger die size in GPUs. Trade-offs between transistor count and frequency due to energy and heat constraints. Visual trends confirm many initial hypotheses but highlight complexities in real-world chip design.
                </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "space-between" } }>
                        <img src={ figure1 }/>
                        <img src={ figure2 }/>
                        <img src={ figure3 }/>
                        <img src={ figure4 }/>
                    </span>
                    <span className="horizontal" style={ { justifyContent: "space-between" } }>
                        <img src={ figure5 }/>
                        <img src={ figure6 }/>
                        <img src={ figure7 }/>
                        <img src={ figure8 }/>
                    </span>
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                    C++, Matplot++, Excel, Dataset 
                </p>

            </article>
        </>
    )
}