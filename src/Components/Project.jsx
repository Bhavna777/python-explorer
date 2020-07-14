import React from 'react';
import './../Css/Project.css';
import HomeSection from './HomeSection';
import image1 from './../image/img1.png';
import image2 from './../image/img2.png';
import image3 from './../image/img3.png';
import image4 from './../image/img4.png';

const Project = () => {
	return (
		<>
			<div className = "ProjectStyle">
				<h1>Welcome to Project page.</h1>
			</div>
			<section className = "section1">
					<h1 className = "text-center font-weight-bold">Core Python</h1>
					<div className = "container-fluid d-flex justify-content-center">
						<div className = "row">
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image1} 
								title = "Calculator"
								text = "Here to make a calculator"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image2} 
								title = "Number guessing"
								text = "How to make a No. guessing game"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image3} 
								title = "Tic Tak Toe"
								text = "How to make a Tic Tak Toe game"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image4} 
								title = "Snake Game"
								text = "Here to make a snake Game"
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
								title = "Alarm Clock"
								text = "How to make a Alarm Clock"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection
								imgsrc = {image2} 
								title = "Music Player"
								text = "How to make a Music Player"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection 
								imgsrc = {image3} 
								title = "Car Game"
								text = "How to make a Cat Game"
								/>
							</div>
							<div className = "col-md-3">
								<HomeSection
								imgsrc = {image4} 
								title = "Text-Editor"
								text = "How to make a Text-Editor"
								/>
							</div>
						</div>
					</div>
				</section>
			</>
		)
}

export default Project;
