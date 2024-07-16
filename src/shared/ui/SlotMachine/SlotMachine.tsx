interface SlotMachineProps {
  children?: React.ReactNode;
  d: string;
}

export const SlotMachine: React.FC<SlotMachineProps> = ({ d, children }) => (
  <div>
    {children} {d}
  </div>
);
