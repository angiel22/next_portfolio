import React, { useEffect, useState } from 'react'
// import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'

const SplashScreen = ({ finishLoading }) => {
const controls = useAnimation();

  useEffect(() => {
    let mounted = true;

    (async () => {
      await controls.start({
        scale: [0, 1.15, 1],
        opacity: [0, 1],
        transition: { duration: 0.8, ease: 'easeInOut' },
      });

      await controls.start({
        scale: 1,
        transition: { duration: 0.2 },
      });

      await controls.start({
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
      });

      if (mounted && typeof finishLoading === 'function') finishLoading();
    })();

    return () => {
      mounted = false;
    };
  }, [controls, finishLoading]);

    return (
    <div className="flex h-screen items-center justify-center">
      <motion.div
        id="logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={controls}
        style={{ display: 'inline-block' }} 
      >
        <Image src="/images/icon.png" alt="icon photo" width={100} height={100} />
      </motion.div>
    </div>
    )
}

export default SplashScreen