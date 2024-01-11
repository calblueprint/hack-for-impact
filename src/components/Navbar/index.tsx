// a lot of code is commented in case mobile view
// requires an animated menu

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';
import logo from '../../graphics/tentative logo.svg';
import { useEffect, useRef } from 'react';

interface Link {
  name: string;
  url: string;
}

interface Props {
  links: Link[];
}

export default function NavBar({ links }: Props) {
  const navbarRef = useRef<HTMLElement>(null);
  // const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      if (navbarRef === null) return;
      if (window.scrollY > 0) navbarRef.current?.classList.add(styles.scrolled);
      else navbarRef.current?.classList.remove(styles.scrolled);
    };

    checkHeight();

    const scrollListener = window.addEventListener('scroll', () => {
      checkHeight();
    });

    return scrollListener;
  }, []);

  const backToTop = () => {
    window.history.replaceState({}, '', '/'); // clear id in url
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav ref={navbarRef}>
      {/* logo */}
      <button className={styles.logo} onClick={backToTop}>
        <img src={logo.src} alt="logo" />
      </button>

      {/* menu toggle */}
      {/* <button
        className={styles.button}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <svg
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
      </button> */}

      {/* backdrop */}
      {/* <div className={styles.backdrop}></div> */}

      {/* links */}
      <section className={styles.links}>
        {links.map(l => (
          <a href={l.url} key={l.url}>
            <h5>{l.name}</h5>
          </a>
        ))}
      </section>

      {/* <AnimatePresence>
        {menuVisible && (
          <motion.section
            className={styles.mobileLinks}
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -100 }}
          >
            {links.map(l => (
              <a href={l.url} key={l.name}>
                {l.name}
              </a>
            ))}
          </motion.section>
        )}
      </AnimatePresence> */}
    </nav>
  );
}
