
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check if device is mobile
    const checkMobile = () => {
      const mobileCheck = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobileCheck);
    };
    
    // Run on mount
    checkMobile();
    
    // Set up listener for window resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Modern event listener method
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    // Fallback for resize event
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Add listeners
    mql.addEventListener("change", handleChange);
    window.addEventListener("resize", handleResize);
    
    // Cleanup listeners
    return () => {
      mql.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return true for mobile, false for desktop, with a fallback to false
  return isMobile ?? false;
}
