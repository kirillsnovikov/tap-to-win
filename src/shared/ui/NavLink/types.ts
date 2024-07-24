import type { LinkProps } from '@tanstack/react-router';

interface BaseProps {
  label: string;
  icon: React.ReactNode;
}

export type NavLinkProps = LinkProps & BaseProps;
