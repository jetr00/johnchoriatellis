import React, { useEffect, useRef } from "react";
import "./Contact.css"

export default function Contact() {
    const coninfo = [
    {
        name: 'E-MAIL',
        url: 'mailto:johny7571@gmail.com',
    },
    {
        name: "Instagram",
        url: 'https://www.instagram.com/jchoriatellis/',    
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/john.tellis.121',
    },
    {
        name: "LinkedIn",
        url: 'https://www.linkedin.com/in/john-choriatellis-6b454316a',    
    },
    {
        name: 'Github',
        url: 'https://github.com/jetr00',
    },
    {
        name: "X",
        url: 'https://x.com/CJ_Choriatellis',    
    },
    ];

    const containerRef = useRef(null);
  
        useEffect(() => {
            const options = {
                root: containerRef.current,
                rootMargin: "0px",
            threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0 to 1.0
            };
        const callback = (entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                target.style.opacity = entry.intersectionRatio;
                target.style.transform = `translateY(${(1 - entry.intersectionRatio) * 20}px)`;
            });
        };
  
        const observer = new IntersectionObserver(callback, options);
        const linkss = containerRef.current.querySelectorAll(".gallery-image-wrapper");
  
        linkss.forEach((coninfo) => observer.observe(coninfo));
  
        return () => observer.disconnect();
    }, []);

    return (
        <section className="coninfo-section">
            <div className="coninfo-scroll" ref={containerRef}>
                <div style={styles.container}>
                    {coninfo.map((contact, index) => (
                        <div key={index} style={styles.card}>
                            <h2>{contact.name}</h2>
                            <button style={styles.button} onClick={() => window.open(contact.url, '_blank')}>
                            Reach out!
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    opacity: '80%',
  },
  card: {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
    color: "white",
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
