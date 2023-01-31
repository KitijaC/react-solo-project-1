import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
    return (
        <div className="profile">
            <img className="profile--image" src="../images/photo.jpg"/>
            <h2>Ann Green</h2>
            <h4>Frontend Developer</h4>
            <p>anngreen.website</p>
            <div className="buttons">
                <button className="btn email"><FaEnvelope className="icon_email"/>Email</button>
                <button className="btn linkedin"><FaLinkedin className="icon_linkedin"/>Linkedin</button>
            </div>
        </div>
    )
}