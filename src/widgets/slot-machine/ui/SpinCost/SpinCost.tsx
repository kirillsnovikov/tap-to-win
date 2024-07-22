import { useGetSpinCost } from '@src/entities/slot-machine/model';
import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';
import { Typography } from '@src/shared/ui/Typography';

export const SpinCost = () => {
  const spinCost = useGetSpinCost();
  const label = spinCost === 0 ? 'Free' : spinCost;

  return (
    <Flex crossAxis="center" as="span" columnGap={4}>
      <ImageIcon src="/images/icons/horseshoe-coin.png" alt="icon of SpinCost" />
      <Typography as="span" color="black" weight="bold" variant="textL">
        {label}
      </Typography>
    </Flex>
  );
};
