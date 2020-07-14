import React from 'react';
import './../Css/About.css';
import Bhavna from './../image/Bhavna.jpg';

const About = () => {
	return (
		<>
			<div className = "AboutStyle">
				<h1>Welcome to About page.</h1>
			</div>
			<div className = "row AboutSection">
                <div className = "col-lg-6 col-md-6 col-md-12">
                    <img src = {Bhavna} alt = "not found"/>
                </div>
                <div className = "col-lg-6 col-md-6 col-md-12">
                        <h1>Hii, I am Bhavna walia.</h1>
                </div>
            </div>
		</>
		)
}

export default About;