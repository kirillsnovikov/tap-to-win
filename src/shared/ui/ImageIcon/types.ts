import type { OverrideableProps } from '@src/shared/types/polymorphic';
import type { ImageIconSize } from './constants';

type ImageIconSizes = `${ImageIconSize}`;

interface BaseImageIconProps {
  size?: ImageIconSizes;
  src: string;
  alt: string;
}

export type ImageIconProps = OverrideableProps<React.ImgHTMLAttributes<HTMLImageElement>, BaseImageIconProps>;
