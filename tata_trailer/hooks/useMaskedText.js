import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useMaskedText = (threshold = 0.5, triggerOnce = true) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });
  const [isUnmasked, setIsUnmasked] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsUnmasked(true);
    }
  }, [inView]);

  return { ref, isUnmasked };
};

export default useMaskedText;
