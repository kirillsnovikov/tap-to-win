import type { OverrideableProps } from '@src/shared/types/polymorphic';

interface BaseAvatarProps {
  src: string;
}

export type AvatarProps = OverrideableProps<React.ImgHTMLAttributes<HTMLImageElement>, BaseAvatarProps>;
