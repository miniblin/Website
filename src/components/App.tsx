import * as React from "react";
import styles from './App.scss'
import Footer from './Footer'
export interface AppProps { }
import Hero from './Hero'
export default function App(props: AppProps) {
    return (
        <div className={styles.container}>
            <Hero />
            <Footer />
        </div>
    )
}  