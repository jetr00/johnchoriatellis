import "./styles.css"
import "./intro.css"
import Intro from "./intro"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {Route, Routes} from "react-router-dom"
import React, { Component } from "react";
import background from "./bg.png";

class App extends Component {
    render() {
        const myStyle = {
            backgroundImage: `url(${background})`,
            height: "100vh",
            backgroundPosition: "top 10% center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black"
        };
    return ( 
        <div style={myStyle}>
        <> <Navbar /> 
            <div className = " container">
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/home" element = {<Home />} />
                    <Route path = "/projects" element = {<Projects />} />
                    <Route path = "/gallery" element = {<Gallery />} />
                    <Route path = "/about" element = {<About />} />
                    <Route path = "/contact" element = {<Contact />} />
                </Routes> 
            </div>
            <p style={styles.copyright}> © 2025 John Choriatellis. All rights reserved. </p> 
        </>,
        </div>     
    );
    }
}

const styles = {
    copyright: {
    	display: 'flex',
	    position: 'absolute',
    	bottom: '-16px',
	    right: '0px',
    	border: '2px solid grey',
	    borderRadius: '5px',
    	backgroundColor: 'grey',
	    opacity: '50%',
    	color: 'white',
    }
}


export default App;