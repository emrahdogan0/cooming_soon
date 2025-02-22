import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const ReactVideoPlayer = ({ videoSrc, sectionId }) => {
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observerCallback = (entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    };

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, [sectionId]);

  if (!mounted) {
    return null; // Avoid rendering on server
  }

  return (
    <ReactPlayer
      url={videoSrc}
      playing={isInView}
      loop
      muted={!isInView}
      controls
      width="100%"
      height="auto"
      config={{
        file: {
          attributes: {
            disablePictureInPicture: true,
            controlsList: "nodownload noplaybackrate",
            preload: "auto",
          },
        },
      }}
    />
  );
};

export default ReactVideoPlayer;
