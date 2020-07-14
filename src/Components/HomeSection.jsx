import React from 'react';
import './../Css/HomeSection.css';
import {Link} from 'react-router-dom';




const HomeSection1 = (props) => {
    return(
        <div className = "HomeSectionStyle text-center">
            <div className = "overflow">
                <img src = {props.imgsrc} alt = "first" className = "card-img-top"/>
            </div>
            <div className = "card-body text-dark">
                <h4 className = "title">{props.title}</h4>
                <p className = "card-text text-secondary">{props.text}</p>
                <Link to = "#" className = "btn btn-outline-success">Get Started</Link>
            </div>
        </div>
    )
}

export default HomeSection1;