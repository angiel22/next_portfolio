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

import { BsRewindCircle } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";


const TimeDisplay = dynamic(() => import("../../utils/getDate"), {
  ssr: false, // hydration error fix
});

export default function FooterModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <section className="flex flex-col gap-6 w-[80%] text-justify 
            md:flex-row md:justify-between md:items-center md:w-full px-4">
            <div className="md:w-1/2 opacity-70">
                <p>Developed by Next.js + Tailwind CSS. Rapid designed in Figma. </p>
                {/* <div className='flex'><TimeDisplay /> ©2025</div> */}
            </div>
            <div id='modalEl'>
                <div className="flex items-center justify-around group w-full md:w-fit
                    bg-zinc-300/30 px-8 py-4 dark:bg-zinc-600/30 rounded-2xl cursor-pointer" 
                    onClick={openModal}>

                    <BsRewindCircle className="mr-2" size={24} />
                    <p>Portfolio Evolution</p>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Rewind Modal"
                    className='bg-zinc-300 dark:bg-zinc-900 m-8 h-[90%] rounded-2xl shadow-lg'
                >
                    <div className="flex justify-between items-center p-4 border-b border-zinc-300 dark:border-zinc-700">
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                            Portfolio Evolution
                        </h2>
                        <button
                            onClick={closeModal}
                            className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-red-500"
                        >
                            <IoIosClose size={28} />
                            Close
                        </button>
                    </div>

                    <div className="flex flex-col justify-center p-6">
                        <Timeline>
                            <TimelineItem>
                                <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400">
                                    2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <a
                                        href='/p_v1/index.html'
                                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition"
                                    >
                                        React Portfolio 1.0
                                    </a>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400">
                                    2024
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <a
                                        href='/p_v2/index.html'
                                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        Vanilla Portfolio 0.5
                                    </a>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400">
                                    2024
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <a
                                        href='/p_v3/index.html'
                                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        Vanilla Portfolio 1.0 *
                                    </a>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400">
                                    03.2025
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <a
                                        href='/p_v4/index.html'
                                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        Vanilla Portfolio 2.0 *
                                    </a>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400">
                                    07.2025
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <a
                                        href='/p_v5/index.html'
                                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        Vanilla Portfolio 2.5
                                    </a>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent className="text-zinc-500 dark:text-zinc-400">
                                    Current
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        React Portfolio 2.0
                                    </button>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </Modal>
            </div>
        </section >
    )
}