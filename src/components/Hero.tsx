import * as React from "react";
import MoreInfo from './MoreInfo'

export default function Hero() {
    return (
        <section>
            <div className="wrap">
               
                <h1>Hi, I'm Dave Lewis </h1>
                <p>
                    React Developer by day, games developer by night.
                    I have a masters and degree in computer science.
                    I make cool things with code.
                </p>
                <MoreInfo />
            </div>
        </section>
    );
}
