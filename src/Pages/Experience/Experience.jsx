import React from "react";
import { useEffect } from "react";
import { Navbarcontext } from "../../Context/Navbarcontext";
import "./Experience.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    const { navbarClick, navbarItem, setFalse } = React.useContext(Navbarcontext);
    useEffect(() => {
        setFalse();
        navbarClick(3);
    }, []);
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="experienceWrapper">
            <h1 className="experienceTitle" data-aos = "fade-up" data-aos-duration ="1000">A Timeline of My Experience</h1>
            <hr></hr>
            <div className="timelineWrapper" data-aos = "fade-up" data-aos-delay = "100" data-aos-duration = "1000">
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h2 className="time">June - July 2023</h2>
                        <h1 className="Activity">Radboud Summer School</h1>
                        <p className="desc">
                        At Radboud University, my educational journey encompassed a comprehensive exploration of R programming. I acquired a profound understanding of the language's fundamentals, delving into basic R concepts and mastering the intricacies of simple data analysis. The curriculum extended to an introduction to text as data, where I cultivated expertise in preprocessing techniques and crafted an information retrieval system. Additionally, I immersed myself in sentiment analysis, expanding my analytical prowess. 
                        </p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2 className="time">November 2022 - February 2023</h2>
                        <h1 className="Activity">Problem Set Design JOINTS(UGM)</h1>
                        <p className="desc">Assumed the responsibility of managing the logic problem set for the competition by formulating and testing logic problems. Designed over 15 challenging questions for the finals and contributed to the creation of problem sets for various rounds throughout the logic competition.</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2 className="time">October 2022 - February 2023</h2>
                        <h1 className="Activity">Freelance Wordpress Developer (POSSI) </h1>
                        <p className="desc">Creating and optimizing the NIAS POSSI website, by using the power of Wordpress for seamless user experience and dynamic functionality.</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2 className="time">November - December 2022</h2>
                        <h1 className="Activity">Security Staff at MAKRAB 2022</h1>
                        <p className="desc">Take responsibility on securing the event and making sure the event is on time through a coordinated effort through Teamwork</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2 className="time">January - May 2022</h2>
                        <h1 className="Activity">HBKI Event Staff</h1>
                        <p className="desc">I took on the role of overseeing the offline event at Bogor Agricultural Institute, effectively coordinating its various aspects. Through meticulous planning and execution, the event not only met but exceeded audience expectations by 1.5 times, providing an outstanding and memorable experience for all participants.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Experience;
