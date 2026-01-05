"use client";
import { useEffect } from "react";

export default function ICEFBadge() {
  useEffect(() => {
    // Load ICEF badge script only on client side
    const script = document.createElement("script");
    script.src = "https://www-cdn.icef.com/scripts/iasbadgeid.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <span id="iasBadge" data-account-id="6964" suppressHydrationWarning />;
}
