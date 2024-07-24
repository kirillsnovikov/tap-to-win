import { ProgressFill } from './ui/ProgressFill';
import { ProgressUnderlay } from './ui/ProgressUnderlay';

interface Props {
  value?: number;
  className?: string;
}

export const ProgressBar: React.FC<Props> = ({ value = 0, className }) => (
  <ProgressUnderlay className={className}>
    <ProgressFill width={value} />
  </ProgressUnderlay>
);
