import { useEffect, useRef, useState } from "react";

const HTML5Player = ({ videoSrc, sectionId }) => {
    const videoRef = useRef(null);
    // const [isInView, setIsInView] = useState(false);

    // useEffect(() => {
    //     const video = videoRef.current;
    //     if (!video) return;

    //     const observerCallback = (entries) => {
    //         const entry = entries[0];
    //         setIsInView(entry.isIntersecting);
    //     };

    //     const observerOptions = {
    //         root: null, // Observe in the viewport
    //         threshold: 0.5, // Trigger when 50% of the section is visible
    //     };

    //     const observer = new IntersectionObserver(observerCallback, observerOptions);

    //     const sectionElement = document.getElementById(sectionId);
    //     if (sectionElement) {
    //         observer.observe(sectionElement);
    //     }

    //     return () => {
    //         if (sectionElement) {
    //             observer.unobserve(sectionElement);
    //         }
    //     };
    // }, [sectionId]);

    // useEffect(() => {
    //     const video = videoRef.current;
    //     if (video) {
    //         if (isInView) {
    //             video.play();
    //             video.muted = false; // Enable sound
    //         } else {
    //             video.pause();
    //             video.muted = true; // Mute sound
    //         }
    //     }
    // }, [isInView]);

    return (
        <video
            ref={videoRef}
            playsInline
            loop
            autoPlay
            muted
            className="w-full h-auto"
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            controls
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default HTML5Player;
