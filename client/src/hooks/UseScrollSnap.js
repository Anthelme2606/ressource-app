import { useEffect, useRef } from "react";

const useScrollSnap = (containerRef, options = { threshold: 0.5 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({ behavior: "smooth" });
          }
        });
      },
      { threshold: options.threshold }
    );

    const container = containerRef.current;

    if (container) {
      const children = Array.from(container.children);
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [containerRef, options]);
};
export default useScrollSnap;