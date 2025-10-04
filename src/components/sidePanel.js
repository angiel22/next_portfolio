// components/sidePanel.js

import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa';

export default function SidePanel({ activeMenuItem, onMenuItemClick }) {

    const menuItems = ["Projects", "Work Experiences", "About"];

    return (
        <div className="relative md:h-screen box-border">
            {/* bg-zinc-300/30 */}
            <div className="fixed left-6 w-64 lg:w-72 flex flex-col justify-between rounded-md bg-zinc-600/30 h-[90%] my-8 p-8">
                <div>
                    <img src="/images/me.jpg" alt="image of Angie" className="object-cover w-full h-1/3 rounded-xl" />
                    <hr className="my-4" />
                    <h1 className="text-5xl font-extrabold mb-2">Angie Li</h1>
                    <h2 className="text-xl">Front-End Developer</h2>
                </div>

                <nav>
                    <ul className="text-1">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className={`cursor-pointer p-2 ${activeMenuItem === item ? "font-bold text-blue-600" : ""
                                    }`}
                                onClick={() => onMenuItemClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                <section>
                    <hr className="m-4" />
                    <div className='flex justify-around'>
                        <a href='https://github.com/al2231' target="_blank" rel="noopener noreferrer"><FaGithub size={24}/></a>
                        <a href='https://www.linkedin.com/in/angie-3200-li/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={24}/></a>
                        <a href="/Li_Resume.pdf" download><FaPaperclip size={24}/></a>
                    </div>
                </section>
            </div>
        </div>
    );
}

