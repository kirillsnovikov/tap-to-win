import { Typography } from '@src/shared/ui/Typography';
import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';

import type { Coins } from '@src/entities/session/model';

interface Props {
  coins: Coins;
}

export const TotalCoins: React.FC<Props> = ({ coins }) => (
  <Flex gap={8} crossAxis="center" mainAxis="center">
    <ImageIcon src="/images/icons/horseshoe-coin.png" alt="total coins" size="xl" />
    <Typography variant="displayXxs" weight="bold">
      {coins}
    </Typography>
  </Flex>
);
