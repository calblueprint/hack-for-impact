import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';

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
    <nav className={styles.nav}>
      {/* logo */}
      <div className={styles.logo}></div>

      {/* menu toggle */}
      <button
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
      </button>

      {/* backdrop */}
      <div className={styles.backdrop}></div>

      {/* links */}
      <section className={styles.links}>
        {links.map(l => (
          <a href={l.url} key={l.url}>
            {l.name}
          </a>
        ))}
      </section>

      <AnimatePresence>
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
      </AnimatePresence>
    </nav>
  );
}
