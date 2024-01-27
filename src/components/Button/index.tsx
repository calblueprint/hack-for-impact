import { type ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  href?: string; // no href = disabled
  variant?: 'primary' | 'secondary' | 'menu';
  children?: ReactNode;
}

export default function Button({ href, variant, children }: Props) {
  const classes: string[] = [styles.btn];
  if (!href) classes.push(styles.disabled);
  if (variant !== 'secondary') classes.push(styles.primary);
  if (variant === 'menu') classes.push(styles.menu);

  return (
    <a
      className={classes.join(' ')}
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </a>
  );
}
