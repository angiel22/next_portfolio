import { useState, useEffect } from "react";
import { PiHamburgerBold } from "react-icons/pi";

export default function MobileMenu({ activeMenuItem, handleMenuItemClick }) {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) setSticky(true);
            else setSticky(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="block md:hidden">
            <div className={`
            transition-all duration-2000 ease-in-out
            ${sticky ? "fixed bottom-4 right-4 z-50" : "relative right-0"}
            `}
            >
                {/* Hamburger button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-3xl p-4 rounded-full bg-zinc-300/50 dark:bg-zinc-600/50 shadow-lg 
                    hover:bg-zinc-400/90 dark:hover:bg-zinc-700/90 transition"
                >
                    <PiHamburgerBold />
                </button>

                {/* Dropdown menu */}
                {open && (
                    <nav
                        className={`
                        absolute w-48 flex flex-col gap-1 p-2 rounded-lg
                        bg-zinc-300/90 dark:bg-zinc-600/90 shadow-lg z-50
                        ${sticky ? "bottom-full mb-2 right-0" : "top-full mt-2 right-0"}
                        `}
                    >
                        {["Projects", "Work Experiences", "About"].map((item) => (
                            <button
                                key={item}
                                className={`text-left px-3 py-2 rounded hover:bg-blue-200 dark:hover:bg-blue-600`}
                                onClick={() => {
                                    handleMenuItemClick(item);
                                    setOpen(false);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </div>
    );
}
