import React from 'react';
import './../Css/Footer.css';


const Footer = () => {
	return (
			<div>
				<div className = "FooterStyle">
                    <h1>Contact Page</h1>
                    <p>If you want to contact me than here you can send me a message:)</p>
                    <div className = "form">
                        <div>
                            <input type="text" id="name" placeholder="Name" required data-error="Please enter your name" />
                        </div>
                        <div>
                            <input type="email" id="email" placeholder="Email" required data-error="Please enter your email" />
                        </div>
                        <div>
                            <input type="text" id="msg_subject" placeholder="Subject" required data-error="Please enter your message subject" />
                        </div>
                        <div>
                            <textarea id="message" rows="7" placeholder="Message" required data-error="Write your message" />
                        </div>
                        <button type="submit" id="submit" className="btn btn-success"> Send Message</button>
                    </div>
				</div>
			</div>
			
		)
}

export default Footer;