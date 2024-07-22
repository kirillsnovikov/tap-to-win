import type { SlotMachineSymbolName } from '@src/entities/slot-machine/model';
import type { OverrideableProps } from '@src/shared/types/polymorphic';

interface BaseSymbolProps {
  symbolName: SlotMachineSymbolName;
}
export type SlotMachineSymbolProps = OverrideableProps<React.HTMLAttributes<HTMLDivElement>, BaseSymbolProps>;
