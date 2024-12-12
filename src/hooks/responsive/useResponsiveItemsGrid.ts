import { useState, useEffect } from "react";
import { Listing } from "../../types/types";

export const useResponsiveItemsGrid = (items: Listing[]) => {
  const [itemsToShow, setItemsToShow] = useState(items);
  const [skeletonsToShow, setSkeletonsToShow] = useState(10);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setItemsToShow(items.slice(0, 10));
        setSkeletonsToShow(10);
      } else if (width >= 1024) {
        setItemsToShow(items.slice(0, 8));
        setSkeletonsToShow(8);
      } else if (width >= 768) {
        setItemsToShow(items.slice(0, 6));
        setSkeletonsToShow(6);
      } else {
        setItemsToShow(items.slice(0, 4));
        setSkeletonsToShow(4);
      }
    };

    updateNumberOfItems();
    window.addEventListener("resize", updateNumberOfItems);

    return () => {
      window.removeEventListener("resize", updateNumberOfItems);
    };
  }, [items]);

  return { itemsToShow, skeletonsToShow };
};

export default useResponsiveItemsGrid;
