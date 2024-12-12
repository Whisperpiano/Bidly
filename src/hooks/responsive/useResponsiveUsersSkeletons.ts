import { useState, useEffect } from "react";

function useResponsiveUsersSkeletons() {
  const [skeletonsToShow, setSkeletonsToShow] = useState<number>(20);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setSkeletonsToShow(20);
      } else if (width >= 1024) {
        setSkeletonsToShow(16);
      } else if (width >= 768) {
        setSkeletonsToShow(12);
      } else {
        setSkeletonsToShow(8);
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

export default useResponsiveUsersSkeletons;
