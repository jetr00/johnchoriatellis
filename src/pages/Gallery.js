import React, { useEffect, useRef } from "react";
import "./Gallery.css"
import img1 from "../Gallery/nef1.jpg"
import img2 from "../Gallery/nef2.jpg"
import img3 from "../Gallery/nef3.jpg"
import img4 from "../Gallery/nef4.jpg"
import img5 from "../Gallery/nef5.jpg"

function Gallery() {
    const images = [img1, img2, img3, img4, img5];
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
    const images = containerRef.current.querySelectorAll(".gallery-image-wrapper");

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
    }, []);

    return (
        <section className="gallery-section">
            <div className="gallery-scroll" ref={containerRef}>
                {images.map((src, index) => (
                    <div key={index} className="gallery-image-wrapper">
                        <img src={src} alt={`Gallery ${index}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;