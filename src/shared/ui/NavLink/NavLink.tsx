import { Link } from '@tanstack/react-router';

import { Typography } from '../Typography';

import type { NavLinkProps } from './types';

import styles from './NavLink.module.css';

export const NavLink: React.FC<NavLinkProps> = ({ icon, label, ...rest }) => (
  <Link {...rest} className={styles.link}>
    {icon}
    <Typography variant="textXs" ellipsis>
      {label}
    </Typography>
  </Link>
);
