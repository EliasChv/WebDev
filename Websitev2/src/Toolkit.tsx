import rust2 from "./assets/Projects/rust2.png"
import rust3 from "./assets/Projects/rust3.png"

export default function Toolkit() {
    return (
        <>
            <article className="pictures-page">
                <header>
                    <a href="/"><input type="button" value={"Home"}/></a>
                    <a href="/resume"><input type="button" value={"Resumé"}/></a>
                    <a href="/Credentials"><input type="button" value={"Credentials"}/></a>
                    <a href="/Projects"><input type="button" value={"Projects"}/></a>
                </header>

                <h1>
                    Electrical Engineering Toolkit (Rust)
                </h1>
                <hr className="rounded"></hr>
                <br/>

                <h4>
                    Goal
                </h4>
                <p>
                    The objective of this project is to provide a robust, **command-line toolkit** for electrical calculations in Rust. It aims to:
                    <ul>
                        <li>Automate routine EE calculations with reliable algorithms.</li>
                        <li>Offer a modular CLI interface to add new problem types easily.</li>
                        <li>Facilitate learning through transparent command syntax and output.</li>
                    </ul>
                </p>

                <h4>
                    Toolkit Overview
                </h4>
                <p>
                    User Needs: Quick, accurate solutions for commonly encountered EE problems (resistors, impedance, energy, Fourier series, etc). Ease of use and extensibility are prioritized.
                </p>
                <p>
                    Key Features:
                    <ul>
                        <li>Resistor value calculation (series/parallel combinations).</li>
                        <li>Complex impedance and reactance solvers for AC circuits.</li>
                        <li>Energy and power computation routines.</li>
                        <li>Fourier analysis on sampled signals.</li>
                        <li>Phasor Calculator.</li>
                        <li>Gain Calculator.</li>
                        <li>Energy Calculator.</li>
                        <li>Unit Converter.</li>

                        <li>Extensible command parser accepts clear, structured inputs.</li>
                        <li>Example-driven help system and error feedback.</li>
                    </ul>
                </p>

                <h4>
                    Conclusions
                </h4>
                <p>
                    This toolkit demonstrates: Effective use of Rust's type safety and module system, clear separation of calculation logic from CLI interface, and scalable architecture for future extension. The system offers a reliable reference for both engineering practice and education.
                </p>

                <hr className="rounded"></hr>

                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ rust2 }/>
                        <img src={ rust3 }/>
                    </span>
               
                </span>

                <hr className="rounded"></hr>
                <br/>
                <h4>
                    Tools Used
                </h4>
                <p>
                     Rust, Clap (CLI parser), ndarray, CLI, Cargo
                </p>

            </article>
        </>
    )
}