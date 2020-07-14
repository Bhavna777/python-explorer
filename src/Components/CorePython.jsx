import React from 'react';
import './../Css/CorePython.css';
import CorePythonSection from './CorePythonSection';
import {Link} from 'react-router-dom';


{/* <Link to="/Introduction"><h4>{props.title1}</h4></Link> */}
const CorePython = () => {
	return (
		<>
			<div className="CorePythonStyle">
				<h1>Welcome to Core Python</h1>
			</div>
			<CorePythonSection
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
