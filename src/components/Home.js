import React from 'react';
import Navbar from './Navbar';
import styles from "../styles/home.module.css";

function Home() {
    return (
        <div>
            <Navbar/>
            <div className={styles.main}>

                <a href='https://www.leminnow.com/' target="_blank" rel="noreferrer" ><i className="bi bi-link"></i> Get Your Lemin Captcha now</a>
                <a href='https://creainc.us/' target="_blank" rel="noreferrer" > <i className="bi bi-link"></i> See more on Crea Inc</a>

            </div>
        </div>
    )
}

export default Home
