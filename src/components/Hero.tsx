import * as React from "react";
import MoreInfo from './MoreInfo'
export default function Hero() {
    return (
        <section className="hero">
            <div className="wrap">
                <img src="./images/dave.png" alt="Dave profile" />
                <h1>Hi, I'm Dave Lewis </h1>
                <p>
                    I am a Programmer and Computer Science graduate currently completing an MSc in Computing with Digital Media at
                    the University of Sussex, I have experience with 3D modelling and animation, programming for 3D
                    and  full stack development. I am also comfortable with both Android
                    and Unity development and  am proficient in version control. I love playing and making games.
                </p>
                <MoreInfo />
                <div id="hero-button">
                    <div className="row" >
                        <div className="small-6 small-centered text-center columns">
                            <button className="button" id="hideshow"> Learn More</button>
                            <a href="#contactSection" className="button success"> Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
