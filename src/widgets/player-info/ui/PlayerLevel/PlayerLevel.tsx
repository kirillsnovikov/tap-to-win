import { ProgressBar } from '@src/shared/ui/ProgressBar';
import { Flex } from '@src/shared/ui/Flex';
import { Typography } from '@src/shared/ui/Typography';

import type { Level } from '@src/entities/session/model';

interface Props {
  level: Level;
}

export const PlayerLevel: React.FC<Props> = ({ level }) => {
  const percentage = (level / 10) * 100;
  return (
    <Flex flow="column" rowGap={8} crossAxis="stretch">
      <Flex mainAxis="spaceBetween" crossAxis="center">
        <Typography as="span" variant="textS" weight="medium">
          Platinum
        </Typography>
        <Flex as="span" columnGap={4} crossAxis="center">
          <Typography as="span" color="textSecondary" variant="textXs">
            Level
          </Typography>
          <Typography as="span" variant="textS" weight="medium">
            {level}/{10}
          </Typography>
        </Flex>
      </Flex>
      <ProgressBar value={percentage} />
    </Flex>
  );
};
