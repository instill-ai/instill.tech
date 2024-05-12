import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Slide({ children, delay, className }: props) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        // type: "spring",
        duration: 0.5,
        damping: 8,
        delay: delay,
        stiffness: 100,
        ease: "easeOut",
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
