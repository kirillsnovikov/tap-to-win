import type { SlotMachineSymbol } from '@src/entities/slot-machine/model';
import type { OverrideableProps } from '@src/shared/types/polymorphic';

interface BaseSymbolProps {
  symbol: SlotMachineSymbol;
}
export type SymbolProps = OverrideableProps<React.HTMLAttributes<HTMLDivElement>, BaseSymbolProps>;
