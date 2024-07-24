import clsx from 'clsx';

import { NavLink } from '@src/shared/ui/NavLink';
import { ImageIcon } from '@src/shared/ui/ImageIcon';

import type { NavLinkProps } from '@src/shared/ui/NavLink';

import styles from './Navigation.module.css';

interface Props {
  className?: string;
}

const links: NavLinkProps[] = [
  { label: 'Slots', icon: <ImageIcon alt="home nav" src="/images/icons/jackpot.png" size="l" />, to: '/' },
  { label: 'Friends', icon: <ImageIcon alt="friends nav" src="/images/icons/friends.png" size="l" />, to: '/friends' },
  { label: 'Earn', icon: <ImageIcon alt="earn nav" src="/images/icons/money-bag.png" size="l" />, to: '/earn' },
  {
    label: 'Daily Reward',
    icon: <ImageIcon alt="reward nav" src="/images/icons/calendar.png" size="l" />,
    to: '/reward',
  },
];

export const Navigation: React.FC<Props> = ({ className }) => (
  <nav className={clsx(styles.nav, className)}>
    {links.map(({ label, ...rest }) => (
      <NavLink {...rest} label={label} key={label} />
    ))}
  </nav>
);
