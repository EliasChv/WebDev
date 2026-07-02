import { useState } from 'react'
import logo from "./assets/GatesND.png"

export default function Resume() {
    const [showingResume, setShowingResume] = useState(true);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleSwitch = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setShowingResume(!showingResume);
            setIsFlipping(false);
        }, 300);
    };

    return (
        <>
            <article>
                <header>
                    <a href="/">
                        <input type="button" value="Home" />
                    </a>
                    <a href="/resume">
                        <input type="button" value="Resumé" />
                    </a>
                    <a href="/Credentials">
                        <input type="button" value="Credentials" />
                    </a>
                    <a href="/Projects">
                        <input type="button" value="Projects" />
                    </a>
                    <img src={logo} alt="Gates ND Logo" className="logo" />
                </header>

                <section className="resume-section">
                    <div className="document-header">
                        <button 
                            className="nav-arrow"
                            onClick={handleSwitch}
                            aria-label="Previous document"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <h1 className="document-title">
                            {showingResume ? 'Resumé' : 'Curriculum Vitae'}
                        </h1>

                        <button 
                            className="nav-arrow"
                            onClick={handleSwitch}
                            aria-label="Next document"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>

                    <hr className="rounded"></hr>

                    <p className="section-description">
                        {showingResume 
                            ? 'View my resume below, which outlines my skills, education, and professional experience.'
                            : 'View my CV below for a more detailed showcase of my academic achievements and research.'}
                    </p>
                    
                    <div className={`document-container ${isFlipping ? 'flipping' : ''}`}>
                        {showingResume ? (
                            <iframe 
                                src="https://drive.google.com/file/d/1xwdIq6DVx-Y56cmILVJ0mMp8xUdVK1BU/preview" 
                                className="document-iframe"
                                allow="autoplay"
                                title="Resume PDF"
                            ></iframe>
                        ) : (
                            <iframe 
                                src="https://drive.google.com/file/d/1WPF_v2JAUEGwINb6tRpv8pYzTQDzJ0np/preview" 
                                className="document-iframe"
                                allow="autoplay"
                                title="CV PDF"
                            ></iframe>
                        )}
                    </div>

                    <div className="download-section">
                        <a 
                            href={showingResume 
                                ? "https://drive.google.com/uc?export=download&id=1xwdIq6DVx-Y56cmILVJ0mMp8xUdVK1BU"
                                : "https://drive.google.com/uc?export=download&id=1WPF_v2JAUEGwINb6tRpv8pYzTQDzJ0np"}
                            className="download-button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download {showingResume ? 'Resume' : 'CV'} (PDF)
                        </a>
                    </div>

                    <div className="document-indicator">
                        <span className={showingResume ? 'active' : ''}>Resume</span>
                        <span className="separator">•</span>
                        <span className={!showingResume ? 'active' : ''}>CV</span>
                    </div>
                </section>
            </article>
        </>
    )
}