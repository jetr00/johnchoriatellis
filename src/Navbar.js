import "./styles.css"
import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return (
        <nav className = "nav">
            <Link to = "/" className = "site-title"> John Choriatellis </Link>
                <ul>
                    <CustomLink to = "/Home"> Home </CustomLink>
                    <CustomLink to = "/Projects"> Projects </CustomLink>
                    <CustomLink to = "/Gallery"> Gallery </CustomLink>
                    <CustomLink to = "/About"> About </CustomLink>
                    <CustomLink to = "/Contact"> Contact </CustomLink>
                </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className = {isActive ? "active" : ""}>
            <Link to = {to} {...props}> {children} </Link>
        </li>
    )
}