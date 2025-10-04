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

import { VERSIONS } from '../data';


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
                <p>Developed by me(Angie) using Next.js + Tailwind CSS. Rapid designed in Figma. </p>
                <div className='flex'><TimeDisplay /> ©2025</div>
            </div>
            <div id='modalEl'>
                {/* bg-zinc-300/30 */}
                <div className="flex items-center justify-around group w-full md:w-fit
                     px-8 py-4 bg-zinc-600/30 rounded-2xl cursor-pointer"
                    onClick={openModal}>

                    <BsRewindCircle className="mr-2" size={24} />
                    <p>Portfolio Evolution</p>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Rewind Modal"
                    className='bg-zinc-900 m-8 h-[90%] rounded-2xl shadow-lg'
                    // bg-zinc-300
                >
                     {/* border-zinc-300  */}
                    <div className="flex justify-between items-center p-4 border-b border-zinc-700">
                        {/* text-zinc-800 */}
                        <h2 className="text-lg font-semibold text-zinc-100"> 
                            Portfolio Evolution
                        </h2>
                        <button
                            onClick={closeModal}
                            // text-zinc-600
                            className="flex items-center gap-1 text-zinc-300 hover:text-red-500"
                        >
                            <IoIosClose size={28} />
                            Close
                        </button>
                    </div>

                    <div className="flex flex-col justify-center p-6">
                        <Timeline>
                            {VERSIONS.map((version) => (

                                <TimelineItem className="flex w-full">
                                    {/* text-zinc-500 */}
                                    <TimelineOppositeContent className="text-zinc-400">
                                        {version.time}
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="flex-1">
                                        <a
                                            href={version.link}
                                            className="block w-full md:w-fit text-center
                                        px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                                        >
                                            {version.name}
                                        </a>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                            <TimelineItem>
                                {/* text-zinc-500 */}
                                <TimelineOppositeContent className="text-zinc-400">
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