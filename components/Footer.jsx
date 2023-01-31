import React from "react"
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <FaTwitterSquare className="footer_icon"/>
            <FaFacebookSquare className="footer_icon"/>
            <FaInstagramSquare className="footer_icon"/>
            <FaGithubSquare className="footer_icon"/>
        </div>
    )
}