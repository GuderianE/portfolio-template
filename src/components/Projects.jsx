import React from "react";
import Card from './Card';
import image1 from '../assets/pureskin.png';
import image2 from '../assets/wheel-of-success-2.png';
import image3 from '../assets/employee-directory.png';
import image4 from '../assets/HTML-Form.png';
import image5 from '../assets/photo-gallery.png';
import image6 from '../assets/web-app.png';
import image7 from '../assets/Sass-samplePage.png';

export default function Projects() {

    return (
        <section className='projects'>
            <Card image={image1} name={'Purskin Website'}/>
            <Card image={image2} name={'Browser Game'}/>
            <Card image={image3} name={'Employee Directory'}/>
            <Card image={image4} name={'HTML Form'}/>
            <Card image={image5} name={'Photo Gallery'}/>
            <Card image={image6} name={'Web App'}/>
            <Card image={image7} name={'Sass Template'}/>
        </section>
    )
}