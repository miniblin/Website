import * as React from "react";

//import and create from json
//make searchable
export interface IPortfolioItemProps{
    title:string;
    image:string;
    description:string;

}
export default function PortfolioItem() {
    return (
        <div className="small-12 medium-6 large-4 column">
            <div className="card" >
                <div className="card-divider">
                    <h2>Crossy Fox</h2>
                </div>
                <img src="./images/crossyFox.png" alt="Crossy Fox" />
                <div className="card-section">
                    A game about a Fox, that likes to cross roads, eat chickens, and not die. Developed in
                <span className="important">JavaScript and HTML5</span>.
              </div>
                <a href="http://davethings.com/crossyfox.html" className="button expand">Play Online!</a>
            </div>
            <img src="./images/crossyfox.png" alt="Crossy Fox" id="skills" />
        </div>
    )
}