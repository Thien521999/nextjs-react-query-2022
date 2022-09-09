import { useInview } from "@hooks";
import React, { useRef, useEffect } from "react";

export const useLazyLoading = () => {
  const { inview, ref } = useInview();

  useEffect(() => {
    const img:any = ref.current;

    if (inview) {
      img.setAttribute("src", img.alt);
      img.classList.add("active");
    }
  }, [inview]);

  return {
    ref,
  };
};