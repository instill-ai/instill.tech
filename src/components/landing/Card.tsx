import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

interface CardProps {
  image: any;
}

const Card: React.FC<CardProps> = ({ image }) => {
  const [, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative flex h-[70px] min-w-[70px] items-center justify-center overflow-hidden"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <a
        href={image.href}
        target="_blank"
        rel="noopener noreferrer"
        className="xl:bg-white xl:p-2"
      >
        <Image
          src={image.src}
          alt={image.src}
          fill
          style={{ objectFit: "cover" }}
          className="my-auto h-12 transition duration-300 xl:h-16"
        />
      </a>
    </motion.div>
  );
};

export default Card;
