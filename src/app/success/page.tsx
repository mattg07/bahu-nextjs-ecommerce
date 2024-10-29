"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

function SuccessPage() {
  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  const textVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.1, duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.1, duration: 0.5 } },

    hover: { scale: 1.1, backgroundColor: "#6b46c1", transition: { yoyo: Infinity } },
  };

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.2 },
    });
  }, []);

  return (
    <div className="flex items-center justify-center py-32 ">
      <div className="flex flex-col items-center gap-5">
        <motion.h1
          className="text-3xl font-semibold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Your order has been placed! 🥳
        </motion.h1>

        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image className="" src="/success.png" alt="Success" width={80} height={80} />
        </motion.div>

        <motion.h3
          className="text-lg text-gray-700"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Thank you for your purchase!
        </motion.h3>

        <motion.button
          className="rounded-md bg-purple-500 py-2 px-4 text-white"
          whileHover="hover"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Link href="/">Continue Shopping</Link>
        </motion.button>
      </div>
    </div>
  );
}

export default SuccessPage;
