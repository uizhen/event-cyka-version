import React from "react";
import { useScroll, motion, useSpring } from "framer-motion";

const Test: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="transform-pre w-full sticky top-0 z-20 bg-[red]"
    >
      <div>test section</div>
    </motion.div>
  );
};

export default Test;
