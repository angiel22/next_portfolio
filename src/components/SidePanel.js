// components/sidePanel.js

import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SidePanel({ activeMenuItem, onMenuItemClick }) {

    const menuItems = ["Projects", "Work Experiences", "About"];

    const letters = Array.from("Angie Li");

    return (
        <div className="relative md:h-screen box-border">
            {/* bg-zinc-300/30 */}
            <div className="fixed left-6 w-64 lg:w-72 flex flex-col justify-between rounded-md bg-zinc-600/30 h-[90%] my-8 p-8">
                <div>
                    <img src="/images/me.jpg" alt="image of Angie" className="object-cover w-full h-1/3 rounded-xl" />
                    <hr className="my-4" />
                    <h1 className="text-5xl font-extrabold mb-2 flex gap-[2px]">
                        {letters.map((char, i) => {
                            const displayChar = char === " " ? "\u00A0" : char;

                            return (
                                <motion.span
                                    key={`${char}-${i}`}
                                    className="inline-block select-none"
                                    style={{ display: "inline-block", willChange: "transform, color" }}
                                    initial={{ y: 0, scale: 1, color: "#ffffff" }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.06,
                                        color: "#4299e1",
                                        textShadow: "0px 6px 18px rgba(99,102,241,0.18)", // subtle glow
                                    }}
                                    transition={{ type: "spring", stiffness: 450, damping: 28, duration: 0.18 }}
                                >
                                    {displayChar}
                                </motion.span>
                            );
                        })}
                    </h1>
                    <h2 className="text-xl">Front-End Developer</h2>
                </div>

                <nav>
                    <ul className="text-1">
                        {menuItems.map((item) => (
                            <motion.li
                                key={item}
                                className={`cursor-pointer p-2 ${activeMenuItem === item ? "font-bold text-blue-600" : ""
                                    }`}
                                onClick={() => onMenuItemClick(item)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                <section>
                    <hr className="m-4" />
                    <div className='flex justify-around'>
                        <motion.a
                            href="https://github.com/al2231"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/angie-3200-li/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <FaLinkedin size={24} />
                        </motion.a>

                        <motion.a
                            href="/Li_Resume.pdf"
                            download
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <FaPaperclip size={24} />
                        </motion.a>
                    </div>
                </section>
            </div>
        </div>
    );
}

