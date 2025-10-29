// home/modal.jsx

import { useState } from "react";

// import CurrentTime from '../../utils/getDate';
import dynamic from "next/dynamic";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';

import { BsRewindCircle } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

import { VERSIONS } from '../data';


const TimeDisplay = dynamic(() => import("../../utils/getDate"), {
    ssr: false, // hydration error fix
});

export default function FooterModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        setShowContent(true);
    };

    const closeModal = () => {
        setShowContent(false);
    };

    return (
        <section className="flex flex-col gap-6 w-[80%] text-justify 
            md:flex-row md:justify-between md:items-center md:w-full px-4">
            <div className="md:w-1/2 opacity-70">
                <p>Developed by me(Angie) using Next.js + Tailwind CSS. Rapid designed in Figma. </p>
                <div className='flex'><TimeDisplay /> ©2025</div>
            </div>
            <div id='modalEl'>
                {/* bg-zinc-300/30 */}
                <motion.button
                    onClick={openModal}
                    className="flex items-center justify-around group w-full md:w-fit
                     px-8 py-4 bg-zinc-600/30 rounded-2xl cursor-pointer"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                >

                    <motion.span
                        className="mr-2"
                        variants={{
                            rest: { rotate: 0 },
                            hover: { rotate: -180 }
                        }}
                        transition={{ duration: 0.27, ease: "easeOut" }}
                    >
                        <BsRewindCircle size={24} />
                    </motion.span>

                    <span>Portfolio Evolution</span>
                </motion.button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Rewind Modal"
                    className="absolute bottom-0 right-0 m-12 h-[90%] w-[70%] bg-zinc-900 rounded-2xl shadow-lg flex flex-col"
                    overlayClassName="fixed inset-0 bg-black/70 flex justify-end items-end"
                >
                    <motion.div
                        key="modalContent"
                        initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
                        animate={showContent ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0.8, x: 100, y: 100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onAnimationComplete={() => {
                            if (!showContent) setModalIsOpen(false); // close modal after exit animation
                        }}
                        className="flex flex-col h-full w-full"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-zinc-700 flex-shrink-0">
                            <h2 className="text-lg font-semibold text-zinc-100">
                                Portfolio Evolution
                            </h2>
                            <motion.button
                                onClick={closeModal}
                                className="flex items-center gap-1 text-zinc-300"
                                whileHover={{ scale: 1.1, color: "#f87171" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <IoIosClose size={28} />
                                Close
                            </motion.button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            <TimelineItem>
                                {/* text-zinc-500 */}
                                <TimelineOppositeContent className="text-zinc-400">
                                    2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <button
                                        className="px-8 py-4 rounded-lg bg-gray-500 text-white"
                                    >
                                        React Portfolio 1.0
                                    </button>
                                </TimelineContent>
                            </TimelineItem>
                            <Timeline>
                                {VERSIONS.map((version) => (

                                    <TimelineItem key={version.id} className="flex w-full p-4">
                                        {/* text-zinc-500 */}
                                        <TimelineOppositeContent className="text-zinc-400">
                                            {version.time}
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent className="flex-1">
                                            <motion.a
                                                href={version.link}
                                                target="_blank"
                                                className="block w-full md:w-fit text-center px-8 py-4 rounded-lg bg-blue-500 text-white"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "#2563eb", // Tailwind bg-blue-600
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            >
                                                {version.name}
                                            </motion.a>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                                <TimelineItem className="p-4">
                                    {/* text-zinc-500 */}
                                    <TimelineOppositeContent className="text-zinc-400">
                                        Current
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <motion.button
                                            onClick={closeModal}
                                            className="px-8 py-4 rounded-lg bg-blue-500 text-white"
                                            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            React Portfolio 2.0
                                        </motion.button>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </motion.div>
                </Modal>
            </div>
        </section >
    )
}