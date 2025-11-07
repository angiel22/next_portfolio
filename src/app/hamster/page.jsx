'use client'

import HamsterTracker from "../../components/HamsterVideo";
import Link from "next/link";
import { motion } from 'framer-motion';
import { IoIosArrowBack } from "react-icons/io";

export default function HamsterPage() {
    return (
        <div className="p-6">
            <div className="m-8 mb-4">
                <motion.a
                    href="/projects"
                    className={`flex mb-4`}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                >
                    <motion.span
                        variants={{
                            rest: { x: 0 },
                            hover: { x: -12 }
                        }}
                        transition={{ duration: 0.27, ease: "easeOut" }}
                    >
                        <IoIosArrowBack size={24} />
                    </motion.span>
                    <span>Back to Project Page</span>
                </motion.a>
                <h1 className="flex justify-center text-xl font-semibold text-zinc-100">Hamster Tracker Demo</h1>
            </div>
            <HamsterTracker />
        </div>
    );
}
