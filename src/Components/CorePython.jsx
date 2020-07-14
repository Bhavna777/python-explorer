import React from 'react';
import './../Css/CorePython.css';
import CorePythonSection from './CorePythonSection';
import {Link} from 'react-router-dom';
import img5 from './../image/img5.jpeg';
import img6 from './../image/img6.jpg';


{/* <Link to="/Introduction"><h4>{props.title1}</h4></Link> */}
const CorePython = () => {
	return (
		<>
			<div className="CorePythonStyle">
				<h1>Welcome to Core Python</h1>
			</div>
			<CorePythonSection
				imgsrc1 = {img5}
				imgsrc2 = {img6}
				FirstSectionTitle="Core Python Content"
				SecondSectionTitle="Core Python Exercise"
				title1="Introduction"
				title2="Input/Output"
				title3="Operators"
				title4="Data Types"
				title5="Control Flow"
				title6="Functions"
				title7="Python OOPs"
				title8="Exception Handling"
				title9="File Handling"
				title10="Python Regex" />
		</>
	);
}

export default CorePython;
