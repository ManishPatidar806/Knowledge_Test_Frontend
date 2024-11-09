import { useEffect } from "react";

const Prevent = () => {
  useEffect(() => {
    const handlePopState = (event) => {
      // Push a new state to prevent navigating back
      window.history.pushState(null, document.title, window.location.href);
    };

    // Listen for popstate (back navigation)
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", handlePopState);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
};

export default Prevent;
