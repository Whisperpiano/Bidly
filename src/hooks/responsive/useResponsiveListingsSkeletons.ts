import { useState, useEffect } from "react";

function useResponsiveListingsSkeletons() {
  const [skeletonsToShow, setSkeletonsToShow] = useState(10);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setSkeletonsToShow(10);
      } else if (width >= 1024) {
        setSkeletonsToShow(8);
      } else if (width >= 768) {
        setSkeletonsToShow(6);
      } else {
        setSkeletonsToShow(4);
      }
    };

    updateNumberOfItems();
    window.addEventListener("resize", updateNumberOfItems);

    return () => {
      window.removeEventListener("resize", updateNumberOfItems);
    };
  }, []);

  return skeletonsToShow;
}

export default useResponsiveListingsSkeletons;
