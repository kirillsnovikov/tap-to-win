import styles from './SlotMachine.module.css';

interface SlotMachineProps {
  children?: React.ReactNode;
}

export const SlotMachine: React.FC<SlotMachineProps> = ({ children }) => (
  <div className={styles.slotMachine}>{children}</div>
);
