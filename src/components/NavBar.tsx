import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Link {
    name: string;
    url: string;
}

interface Props {
    links: Link[];
}

export default function NavBar({ links }: Props) {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <nav className="flex z-50 bg-background w-full h-14 justify-between items-center px-8 relative">
            {/* logo */}
            <div className="h-6 w-6 z-50 rounded-full bg-gray"></div>

            {/* menu toggle */}
            <button
                className="w-6 h-6 z-50 flex flex-col justify-between md:invisible"
                onClick={() => setMenuVisible(!menuVisible)}
            >
                <svg
                    className="w-full h-full"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="0" y="8" width="30" height="2" fill="black" />
                    <rect x="0" y="15" width="30" height="2" fill="black" />
                    <rect x="0" y="22" width="30" height="2" fill="black" />
                </svg>
            </button>

            {/* backdrop */}
            <div className="absolute left-0 top-0 z-40 w-full h-full bg-background md:invisible"></div>

            {/* links */}
            <section className="z-50 justify-evenly gap-8 hidden md:flex">
                {links.map((l) => (
                    <a href={l.url} key={l.url}>
                        {l.name}
                    </a>
                ))}
            </section>

            <AnimatePresence>
                {menuVisible && (
                    <motion.section
                        className="flex z-30 justify-evenly absolute items-end pr-8 bg-black bg-opacity-30 text-white font-light py-2 flex-col top-full left-0 w-full md:hidden"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: -100 }}
                    >
                        {links.map((l) => (
                            <a href={l.url} key={l.name}>
                                {l.name}
                            </a>
                        ))}
                    </motion.section>
                )}
            </AnimatePresence>
        </nav>
    );
}
