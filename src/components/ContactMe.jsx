import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
function ContactMe() {
    return (
        <>
            <div className="footer bg-dark py-3">
                <div className="container">
                    <div className="row">
                        <h1 className="col-12" style={{ color: "orange" }}>Contact Me</h1>
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/" target="_blank" className="items"><FaInstagram className="icons" /></a>
                        <a href="https://www.linkedin.com/in/sathish-madesh/" target="_blank" className="items"><CiLinkedin className="icons" /></a>
                        <a href="https://github.com/SathishMadesh" target="_blank" className="items"><FaGithub className="icons" /></a>
                        <a href="mailto:sathishmadesh0304@gmail.com" target="_blank" className="items"><BiLogoGmail className="icons" /></a>
                    </div>
                    <div className="copy-right text-light d-flex justify-content-center pt-2">
                        <p>Copyright@MyPortfolio</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe
