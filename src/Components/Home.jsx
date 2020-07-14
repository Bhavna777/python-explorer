import React from 'react';
import './../Css/Home.css';
import { Link } from 'react-router-dom';
//import './../image/1.webp';
//import './../image/images.png';
import HomeSection from './HomeSection';
import image1 from './../image/img1.png';
import image2 from './../image/img2.png';
import image3 from './../image/img3.png';
import image4 from './../image/img4.png';
import img5 from './../image/img5.jpeg';
import img6 from './../image/img6.jpg';



const Home = () => {
	return (
			<div>
				<div className = "HomeStyle">
					<Link to="/CorePython"><button className = "btn1">Get Started</button></Link>
				</div>
				<section className = "section1">
					<h1 className = "text-center font-weight-bold">Core Python</h1>
					<div className = "container-fluid d-flex justify-content-center">
						<div className = "row">
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image1} 
								title = "Learn"
								text = "Here you can learn the Python"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image2} 
								title = "Exersize"
								text = "Here you can take the Exercises"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image3} 
								title = "Quiz"
								text = "Here you can test your skills"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image4} 
								title = "Certificate"
								text = "Here you can get your certificate"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className = "section2">
					<h1 className = "text-center font-weight-bold">Advance Python</h1>
					<div className = "container-fluid d-flex justify-content-center">
						<div className = "row">
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image1} 
								title = "Learn"
								text = "Here you can learn the Python"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection
								imgsrc = {image2} 
								title = "Exersize"
								text = "Here you can take the Exercises"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image3} 
								title = "Quiz"
								text = "Here you can test your skills"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection
								imgsrc = {image4} 
								title = "Certificate"
								text = "Here you can get your certificate"
								/>
							</div>
						</div>
					</div>
				</section>
				
			</div>
			
		)
}

export default Home;