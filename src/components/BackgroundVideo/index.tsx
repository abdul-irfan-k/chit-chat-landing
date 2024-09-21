interface BackgroundVideoProps {
  src: string;
}
const BackgroundVideo = ({ src }: BackgroundVideoProps) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        height: "100%",
        width: "100%", // Adjust width based on height
        objectFit: "cover", // Maintain aspect ratio and cover the space
        zIndex: -1, // Send it behind other content
      }}
    >
      <source src={src} type="video/mp4" />\
    </video>
  </div>
);

export default BackgroundVideo;
