import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';

interface Props {
  total: number;
  left: number;
}

export const Attempts: React.FC<Props> = ({ left, total }: Props) => (
  <Flex crossAxis="center" as="span" columnGap={4}>
    <ImageIcon src="/images/slot-machine/battery.webp" alt="battery icon of attempts" />
    <span>{`${left}/${total}`}</span>
  </Flex>
);
