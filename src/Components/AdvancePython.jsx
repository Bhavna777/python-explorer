import React from 'react';
import './../Css/AdvancePython.css';
import CorePythonSection from './CorePythonSection';
import img7 from './../image/img7.jpg';
import img8 from './../image/img8.jpg';

const AdvancePython = () => {
	return (
		<>
			<div className = "AdvancePythonStyle">
				<h1>Welcome to Advance Python page.</h1>
			</div>
			<CorePythonSection
				imgsrc1 = {img7}
				imgsrc2 = {img8} 
				FirstSectionTitle = "Advance Python Content"
				SecondSectionTitle = "Advance Python Exercise"
				title1 = "Django Framework"
				title2 = "Data Analysis"
				title3 = "Numpy"
				title4 = "Pandas"
				title5 = "Machine Learning with Python"
				title6 = "Python GUI"
				title7 = "Modules in Python"
				title8 = "Working With Database"
				title9 = "Misc"
				title10 = "Applications and Projects"
			/>
		</>
		);
}

export default AdvancePython;
