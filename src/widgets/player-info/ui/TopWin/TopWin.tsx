import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';
import { Typography } from '@src/shared/ui/Typography';

import type { Win } from '@src/entities/session/model';

import styles from './TopWin.module.css';

interface Props {
  topWin: Win;
}

export const TopWin: React.FC<Props> = ({ topWin }) => (
  <Flex className={styles.topWin} crossAxis="center" columnGap={8} mainAxis="spaceBetween">
    <Flex flow="column" crossAxis="start">
      <Typography as="span" color="gray" variant="textXs">
        Top win:
      </Typography>
      <Flex crossAxis="center" columnGap={4}>
        <Typography as="span" weight="medium">
          {topWin}
        </Typography>
        <ImageIcon src="/images/icons/horseshoe-coin.png" alt="top win icon" size="xs" />
      </Flex>
    </Flex>
  </Flex>
);
