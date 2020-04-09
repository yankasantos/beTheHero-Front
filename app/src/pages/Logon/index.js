import React from 'react';

import './style.css';

import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">

            </section>

            <img src={heroesImg} alt="Heroes, pessoas juntas com os punhos levantados ao céu"/>

        </div>   
    );
}