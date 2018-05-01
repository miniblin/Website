import * as React from "react";
import styles from './App.scss'
import Footer from './Footer'
export interface AppProps { }
import Hero from './Hero'
import Navigation from './Navigation'
export default function App(props: AppProps) {
    return (
        <div className={styles.container}>
            <Navigation />
            <Hero />
            <Footer />
        </div>
    )
}  