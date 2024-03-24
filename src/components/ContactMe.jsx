import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
function ContactMe() {
    return (
        <>
            <div className="footer">
                <div className="contact-container">
                <h1 className="col-12">Contact Me</h1>
                <div className="footer-icons">
                    <div className="items"><FaInstagram className="icons"/></div>
                    <div className="items"><CiLinkedin className="icons"/></div>
                    <div className="items"><FaGithub className="icons"/></div>
                    <div className="items"><BiLogoGmail className="icons"/></div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe
