import { Avatar } from '@src/shared/ui/Avatar';
import { Flex } from '@src/shared/ui/Flex';
import { Typography } from '@src/shared/ui/Typography';

import styles from './PlayerBio.module.css';

interface Props {
  avatarSrc: string;
  login: string;
}

export const PlayerBio: React.FC<Props> = ({ avatarSrc, login }) => (
  <Flex columnGap={8} className={styles.bio} crossAxis="center">
    <Avatar src={avatarSrc} />
    <Typography as="span" variant="textXs">
      {login}
    </Typography>
  </Flex>
);
