import * as React from "react";

export default function () {
    return (
        <section id="skillsSection" className="main">
            <div className="wrap row">
                <div className="small-12 medium-12 column">
                    <h1> Skills</h1>
                    <div className="small-12 medium-6 column">
                        <h2>Languages</h2>
                        <hr />
                        <p>
                            I can code for you in many languages, here are some I'm most familiar with:<br />
                            <img src="./images/languages.png" alt="Dave skills" id="skills" />
                        </p>
                    </div>
                    <div className="small-12 medium-6 column">
                        <h2>Tools</h2>
                        <hr />
                        <p>
                            <div id="tools" >
                                I'm fluent with the following tools and environments:
                            <br /><br />
                                <img src="./images/unity.png" alt="" />
                                <img src="./images/3dsmaz.gif" alt="" />
                                <img src="./images/github.png" alt="" />
                                <img src="./images/photoshop.png" alt="" />
                                <img src="./images/zurb.png" alt="" />
                                <img src="./images/android.png" alt="" />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}