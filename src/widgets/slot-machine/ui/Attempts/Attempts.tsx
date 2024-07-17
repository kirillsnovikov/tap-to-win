import { useGetAttempts } from '@src/entities/slot-machine/model';
import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';
import { Typography } from '@src/shared/ui/Typography';

export const Attempts = () => {
  const [attemptsLeft, attemptsLimit] = useGetAttempts();
  return (
    <Flex crossAxis="center" as="span" columnGap={4}>
      <ImageIcon src="/images/slot-machine/battery.webp" alt="battery icon of attempts" size="l" />
      <Typography as="span" color="black" weight="bold">{`${attemptsLeft}/${attemptsLimit}`}</Typography>
    </Flex>
  );
};
