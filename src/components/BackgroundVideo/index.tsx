import React from "react";

interface BackgroundVideoProps {
  src: string;
  autoPlay?: boolean;
}
const BackgroundVideo = React.forwardRef<
  HTMLVideoElement,
  BackgroundVideoProps
>(({ src, autoPlay = true }, ref) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
    }}
  >
    <video
      // autoPlay={autoPlay}
      loop
      muted
      // playsInline
      style={{
        height: "100%",
        width: "100%", // Adjust width based on height
        objectFit: "cover", // Maintain aspect ratio and cover the space
        zIndex: -1, // Send it behind other content
      }}
      ref={ref}
    >
      <source src={src} type="video/mp4" />\
    </video>
  </div>
));

export default BackgroundVideo;
