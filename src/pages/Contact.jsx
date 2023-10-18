import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch or have any questions, feel free to contact me through one of the following methods:</p>

            <div className="contact-methods">
                <div className="contact-method">
                    <h2>Email</h2>
                    <p>
                        Send me an email at <a href="mailto:alejandro.ahijado@gmail.com">alejandro.ahijado@gmail.com</a>
                    </p>
                </div>

                <div className="contact-method">
                    <h2>LinkedIn</h2>
                    <p>
                        Connect with me on <a href="https://www.linkedin.com/in/alejandroahijado" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </div>

                <div className="contact-method">
                    <h2>GitHub</h2>
                    <p>
                        Check out my projects on <a href="https://github.com/alexahijado" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
