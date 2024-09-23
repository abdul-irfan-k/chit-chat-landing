import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<
    "Smartphone" | "Tablet" | "Desktop"
  >("Desktop");

  const updateDeviceType = () => {
    if (window == undefined) return;
    const width = window.innerWidth;
    if (width <= 640) {
      setDeviceType("Smartphone");
    } else if (width <= 1024) {
      setDeviceType("Tablet");
    } else {
      setDeviceType("Desktop");
    }
  };

  useEffect(() => {
    updateDeviceType();

    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
