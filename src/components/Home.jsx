import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from "react";
import Form from './Form';

export default function Home() {

    return (
        <section className='home'>
            <div className='landing-page'>
                <div>
                    <h1>Elias Guderian</h1>
                    <button><Link to='/Projects'>My Projects</Link></button>
                </div>
            </div>
            <div className='form-container'>
                <Form/>
            </div>
        </section>
    )
}