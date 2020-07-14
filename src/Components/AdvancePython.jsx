import React from 'react';
import './../Css/AdvancePython.css';
import CorePythonSection from './CorePythonSection';

const AdvancePython = () => {
	return (
		<>
			<div className = "AdvancePythonStyle">
				<h1>Welcome to Advance Python page.</h1>
			</div>
			<CorePythonSection 
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
