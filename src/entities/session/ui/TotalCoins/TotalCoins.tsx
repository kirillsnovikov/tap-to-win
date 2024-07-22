import { Typography } from '@src/shared/ui/Typography';
import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';

import { withSession, type WithSessionBaseProps } from '../withSession';

const TotalCoinsComponent = ({ player }: WithSessionBaseProps) => (
  <Flex gap={8} crossAxis="center">
    <ImageIcon src="/images/icons/horseshoe-coin.png" alt="total coins" size="xl" />
    <Typography variant="displayXxs" weight="bold">
      {player.coins}
    </Typography>
  </Flex>
);

export const TotalCoins = withSession(TotalCoinsComponent);
