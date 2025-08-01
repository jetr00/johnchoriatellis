import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
    const sectionRef = useRef(null);
    const [opacity, setOpacity] = useState(1);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        let start = 1.0;
        const interval = setInterval(() => {
            start -= 0.02;
            if (start <= 0.6) {
                clearInterval(interval);
            } else {
                setOpacity(parseFloat(start.toFixed(2)));
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`about-section ${visible ? "open" : ""} d-flex align-items-center justify-content-center position-relative`}
            style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
        >
            <div className="line left-line" style={{ opacity }}></div>
            <div className="about-content text-white">
                <h2>About Me</h2>
                <p>
                    I am 21 years old, from Mytilene, Lesvos, Greece. 
                    But right now I am living and studying in Athens 
                    at the University of West Attica in the department 
                    of Informatics and Computer Engineering. Right now 
                    I am working on a Python and MySQL project and I am 
                    also getting ready to shoot a short movie in my 
                    hometown as a miniproject.
                </p>
            </div>
            <div className="line right-line" style={{ opacity }}></div>
        </section>
    );
}