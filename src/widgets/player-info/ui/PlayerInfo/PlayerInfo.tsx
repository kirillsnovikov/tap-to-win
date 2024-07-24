import { Flex } from '@src/shared/ui/Flex';
import { withSession } from '@src/entities/session/ui/withSession';

import { PlayerBio } from '../PlayerBio';
import { TopWin } from '../TopWin';
import { TotalCoins } from '../TotalCoins';
import { PlayerLevel } from '../PlayerLevel';

import type { WithSessionBaseProps } from '@src/entities/session/ui/withSession';

import styles from './PlayerInfo.module.css';

const PlayerInfoComponent = ({ player }: WithSessionBaseProps) => {
  const { coins, login, picture, topWin, level } = player;
  return (
    <Flex flow="column" rowGap={16} className={styles.playerInfo}>
      <Flex crossAxis="center" columnGap={16}>
        <PlayerBio avatarSrc={picture} login={login} />
        <TopWin topWin={topWin} />
      </Flex>
      <TotalCoins coins={coins} />
      <PlayerLevel level={level} />
    </Flex>
  );
};

export const PlayerInfo = withSession(PlayerInfoComponent);
