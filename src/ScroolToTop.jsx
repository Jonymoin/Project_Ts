import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left of the page
  }, [pathname]); // Trigger scroll whenever the route changes

  return null; // This component does not render anything
};

export default ScrollToTop;