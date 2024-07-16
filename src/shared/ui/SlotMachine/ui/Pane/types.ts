import type { OverrideableProps } from '@src/shared/types/polymorphic';
import type { panes } from '../../config';

export type PaneName = (typeof panes)[number];

interface BasePaneProps {
  name: PaneName;
}
export type PaneProps = OverrideableProps<React.HTMLAttributes<HTMLDivElement>, BasePaneProps>;
