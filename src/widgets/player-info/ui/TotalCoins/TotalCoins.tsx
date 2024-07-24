import clsx from 'clsx';

import { Typography } from '@src/shared/ui/Typography';
import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';
import { useGetIsWin } from '@src/entities/slot-machine/model';

import type { Coins } from '@src/entities/session/model';

import styles from './TotalCoins.module.css';

interface Props {
  coins: Coins;
}

export const TotalCoins: React.FC<Props> = ({ coins }) => {
  const isWin = useGetIsWin();
  const className = clsx([isWin && styles.win]);
  return (
    <Flex gap={8} crossAxis="center" mainAxis="center">
      <ImageIcon className={className} src="/images/icons/horseshoe-coin.png" alt="total coins" size="xl" />
      <Typography variant="displayXxs" weight="bold">
        {coins}
      </Typography>
    </Flex>
  );
};
