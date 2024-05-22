import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  if (typeof window === "undefined") {
    return isMobile;
  }

  useEffect(() => {
    if (window.screen.width < 800) {
      setIsMobile(true);
      console.log(
        "isMobile from useMobile , window.screen.width",
        isMobile,
        window.screen.width
      );
    }
  }, []);

  return isMobile;
}
