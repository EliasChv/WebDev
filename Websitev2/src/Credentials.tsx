import CyberBadge from "./assets/Credentials/CyberBadge.png"
import ITBadge from "./assets/Credentials/ITBadge.png"
import GoogleCyber from "./assets/Credentials/GoogleCyber.png"
import GoogleIT from "./assets/Credentials/GoogleIT.png"
import DataBadge from "./assets/Credentials/DataBadge.png"
import DataAnalytics from "./assets/Credentials/DataAnalytics.png"

export default function Credentials() {
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
                    Certifications & Courses
                </h1>


                <hr className="rounded"></hr>
                   <h3>
  			 Google Career Certificate In Cybersecurity
    		</h3>
                <p style={ { display: "flex", justifyContent: "center" } }>
                This course has deepened my understanding of cybersecurity principles, including threat detection, risk assessment, and best practices for protecting systems and data. I’ve developed practical skills to navigate the evolving landscape of cybersecurity.
               </p>
            
                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ CyberBadge }/>
                         <img src={ GoogleCyber }/>
                </span>
                   <h4>
                    Tools Used
                </h4>
                <p>
                    Linux, Python, SQL, SIEM Tools, Intrusion Detection Systems (IDS), Packet Sniffers, Log Analysis Tools, Penetration Testing Tools
                </p>

                </span><br/>


                <hr className="rounded"></hr>

       <h3>
  			 Google Career Certificate In IT Support
    		</h3>
                <p style={ { display: "flex", justifyContent: "center" } }>
                This program has provided me with a strong foundation in IT support, networking, system administration, and troubleshooting. Through hands-on training, I’ve gained the essential skills to manage and maintain IT infrastructure efficiently. 
                </p>
            
                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ ITBadge }/>
                         <img src={ GoogleIT }/>
                </span>
                <h4>
                    Tools Used
                </h4>
                <p>
                    Linux, Troubleshooting Directory Services, TCPDump, Cloud Infrastructure Tools, Networking Tools (DNS, TCP/IP)
                </p>

                </span><br/>
                <hr className="rounded"></hr>



 <h3>
  			 Google Career Certificate In Data Analytics
    		</h3>
                <p style={ { display: "flex", justifyContent: "center" } }>
                This course has expanded my understanding of data analytics, from data collection and cleaning to analysis and visualization. I have learned to use tools and techniques to interpret data and generate actionable insights, enabling data-driven decision-making in various fields.
                </p>
            
                <span className="verticle">
                    <span className="horizontal" style={ { justifyContent: "center" } }>
                        <img src={ DataBadge }/>
                         <img src={ DataAnalytics }/>
                </span>
                <h4>
                    Tools Used
                </h4>
                <p>
                    Excel, SQL, R, Tableau, Google Data Studio, Python, BigQuery, Data Cleaning Tools, Data Visualization Tools
                </p>

                </span><br/>
                <hr className="rounded"></hr>


               
            </article>
        </>
    )
}

