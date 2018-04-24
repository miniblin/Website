import * as React from "react";
import Footer from './Footer'
export interface AppProps { }
import Hero from './Hero'
export default function App(props: AppProps) {
    return (
        <>
            <Hero />
            <Footer />
        </>
    )
}  