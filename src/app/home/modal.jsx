// home/modal.jsx

import { useState } from "react";
import dynamic from "next/dynamic";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

import { BsRewindCircle } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

import { VERSIONS } from '../data';
import TerminalBackground from "./terminal";

const TimeDisplay = dynamic(() => import("../../utils/getDate"), {
    ssr: false,
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
            md:flex-row md:justify-between md:items-center md:w-full pl-6 pr-4">
            <div className="md:w-1/2 opacity-70">
                <p>Developed by me (Angie) using Next.js + Tailwind CSS. Rapid designed in Figma.</p>
                <div className="flex"><TimeDisplay /></div>
            </div>

            <div id="modalEl">
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
                    className="absolute bottom-0 right-0 m-6 md:m-10
                                w-[90%] md:w-[420px]
                                bg-zinc-900 rounded-2xl
                                flex flex-col overflow-hidden"
                    overlayClassName="fixed inset-0 bg-black/60 flex justify-end items-end z-50"
                >
                    <motion.div
                        key="modalContent"
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={showContent
                            ? { opacity: 1, scale: 1, y: 0 }
                            : { opacity: 0, scale: 0.9, y: 40 }
                        }
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        onAnimationComplete={() => {
                            if (!showContent) setModalIsOpen(false);
                        }}
                        className="flex flex-col w-full relative"
                        style={{ maxHeight: "80vh" }}
                    >
                        {/* Terminal bg — sits behind everything */}
                        <TerminalBackground />

                        {/* Header */}
                        <div className="flex justify-between items-center px-5 py-4
                                        border-b border-zinc-800 bg-zinc-950/80
                                        flex-shrink-0 relative z-10">
                            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-400">
                                Portfolio Evolution
                            </h2>
                            <motion.button
                                onClick={closeModal}
                                className="flex items-center gap-1 text-zinc-500 text-sm"
                                whileHover={{ color: "#f87171" }}
                                transition={{ duration: 0.15 }}
                            >
                                <IoIosClose size={22} />
                                Close
                            </motion.button>
                        </div>

                        {/* Scrollable timeline — hidden scrollbar */}
                        <div
                            className="flex-1 relative z-10 pl-6 pr-4 py-6"
                            style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                            <Timeline sx={{ padding: 0, margin: 0 }}>
                                {/* First static entry */}
                                <TimelineItem sx={{ '&::before': { display: 'none' }, py: '6px' }}>
                                    <TimelineSeparator>
                                        <TimelineDot sx={{ bgcolor: '#52525b', boxShadow: 'none', margin: '4px 0' }} />
                                        <TimelineConnector sx={{ bgcolor: '#3f3f46' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ pb: 2, pt: 0 }}>
                                        <p className="text-xs text-zinc-500 mb-1.5">2023</p>
                                        <div className="w-full text-center px-6 py-3 rounded-xl
                                                        bg-zinc-700/50 text-zinc-400 text-sm">
                                            React Portfolio 1.0
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>

                                {/* Dynamic versions */}
                                {VERSIONS.map((version) => (
                                    <TimelineItem
                                        key={version.id}
                                        sx={{ '&::before': { display: 'none' }, py: '6px' }}
                                    >
                                        <TimelineSeparator>
                                            <TimelineDot sx={{ bgcolor: '#3b82f6', boxShadow: 'none', margin: '4px 0' }} />
                                            <TimelineConnector sx={{ bgcolor: '#3f3f46' }} />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ pb: 2, pt: 0 }}>
                                            <p className="text-xs text-zinc-500 mb-1.5">{version.time}</p>
                                            <motion.a
                                                href={version.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full text-center px-6 py-3
                                                           rounded-xl bg-blue-600 text-white text-sm"
                                                whileHover={{ scale: 1.03, backgroundColor: "#2563eb" }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            >
                                                {version.name}
                                            </motion.a>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}

                                {/* Current — no connector below */}
                                <TimelineItem sx={{ '&::before': { display: 'none' }, py: '6px' }}>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            variant="outlined"
                                            sx={{ borderColor: '#3b82f6', boxShadow: 'none', margin: '4px 0' }}
                                        />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ pb: 0, pt: 0 }}>
                                        <p className="text-xs text-zinc-500 mb-1.5">Current</p>
                                        <motion.button
                                            onClick={closeModal}
                                            className="w-full px-6 py-3 rounded-xl
                                                       bg-blue-600 text-white text-sm"
                                            whileHover={{ scale: 1.03, backgroundColor: "#2563eb" }}
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
        </section>
    );
}