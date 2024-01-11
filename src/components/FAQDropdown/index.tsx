import { useState } from 'react';
import styles from './style.module.scss';

export interface Question {
  label: string;
  content: string;
  hyperlink?: { target: string; link: string };
}

interface FAQDropdownProps {
  question: Question;
  defaultOpen?: boolean;
}

const FAQDropdown = ({ question, defaultOpen }: FAQDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen ? true : false);
  const { label, content, hyperlink } = question;

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const renderContent = () => {
    if (hyperlink) {
      const { target, link } = hyperlink;

      const parts = content.split(target);

      return (
        <div className={styles.content}>
          <p>
            {parts[0]}
            <a href={link} target="_blank">
              {target}
            </a>
            {parts[1]}
          </p>
        </div>
      );
    }

    return (
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.labelContainer}
        onClick={handleToggle}
        tabIndex={0}
        onKeyUp={handleToggle}
      >
        <div className={styles.statusIcon}>{isOpen ? '-' : '+'}</div>
        <b>{label}</b>
      </div>
      {isOpen && renderContent()}
    </div>
  );
};

export default FAQDropdown;
