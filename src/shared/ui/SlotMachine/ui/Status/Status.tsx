import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';

interface Props {
  status: string;
}

export const Status: React.FC<Props> = ({ status }: Props) => (
  <Flex crossAxis="center" as="span" columnGap={4}>
    <ImageIcon src="/images/icons/horseshoe.png" alt="horseshoe icon of status" />
    <span>{status}</span>
  </Flex>
);
