import React from 'react';
import './../Css/CorePythonSection.css';
import img5 from './../image/img5.jpeg';
import img6 from './../image/img6.jpg';
import { Link } from 'react-router-dom';



const CorePythonSection = (props) => {
    return(
        <>
            <section className = "CorePythonSectionStyle1 text-center">
                <div className = "row1">
                    <div className = "col-lg-6 col-md-6 col-md-12">
                        <img src = {img5} alt = "not found"/>
                    </div>
                    <div className = "col-lg-6 col-md-6 col-md-12">
                        <h2 className = "mt-2 mb-4"><b>{props.FirstSectionTitle}</b></h2>
                            <Link to="/Introduction"><h4>{props.title1}</h4></Link>
                            <Link to="#"><h4>{props.title2}</h4></Link>
                            <Link to="#"><h4>{props.title3}</h4></Link>
                            <Link to="#"><h4>{props.title4}</h4></Link>
                            <Link to="#"><h4>{props.title5}</h4></Link>
                            <Link to="#"><h4>{props.title6}</h4></Link>
                            <Link to="#"><h4>{props.title7}</h4></Link>
                            <Link to="#"><h4>{props.title8}</h4></Link>
                            <Link to="#"><h4>{props.title9}</h4></Link>
                            <Link to="#"><h4>{props.title10}</h4></Link>
                    </div>
                </div>
            </section>
            <section className = "CorePythonSectionStyle2 text-center">
                <div className = "row2">
                <div className = "col-lg-6 col-md-6 col-md-12">
                        <h2 className = "mt-2 mb-4"><b>{props.SecondSectionTitle}</b></h2>
                            <Link to="#"><h4>{props.title1}</h4></Link>
                            <Link to="#"><h4>{props.title2}</h4></Link>
                            <Link to="#"><h4>{props.title3}</h4></Link>
                            <Link to="#"><h4>{props.title4}</h4></Link>
                            <Link to="#"><h4>{props.title5}</h4></Link>
                            <Link to="#"><h4>{props.title6}</h4></Link>
                            <Link to="#"><h4>{props.title7}</h4></Link>
                            <Link to="#"><h4>{props.title8}</h4></Link>
                            <Link to="#"><h4>{props.title9}</h4></Link>
                            <Link to="#"><h4>{props.title10}</h4></Link>
                    </div>
                    <div className = "col-lg-6 col-md-6 col-md-12">
                        <img src = {img6} alt = "not found"/>
                    </div>
                </div>
            </section>
            <section className = "QuizSection">
                <h1 className = "text-center">Start the Quiz</h1>
                <button className = "QuizBtn text-center">Quiz</button>
            </section>
            <section className = "CertificateSection">
                <h1 className = "text-center">Get your certificate</h1>
                <button className = "CertificateBtn text-center">Certificate</button>
            </section>
            
        </>
    )
}

export default CorePythonSection;