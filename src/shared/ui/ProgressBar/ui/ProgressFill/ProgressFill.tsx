import styles from './ProgressFill.module.css';

interface Props {
  width: number;
}

export const ProgressFill: React.FC<Props> = ({ width }) => {
  const styleFill: React.CSSProperties = {
    width: `${width}%`,
  };

  return <span className={styles.fill} style={styleFill} />;
};
