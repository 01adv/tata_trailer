import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";

const useScrollAnimation = (type) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationProps = useSpring(
    type === "scale"
      ? {
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(0.8)",
          config: { duration: 400, easing: (t) => t * (2 - t) }, // easeOut
        }
      : {
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(50px)",
          config: { duration: 500 },
        }
  );

  return { ref, animationProps };
};

export default useScrollAnimation;
