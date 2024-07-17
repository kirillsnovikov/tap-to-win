import { useGetSpinCost } from '@src/entities/slot-machine/model';
import { Flex } from '@src/shared/ui/Flex';
import { ImageIcon } from '@src/shared/ui/ImageIcon';

export const SpinCost = () => {
  const spinCost = useGetSpinCost();
  const label = spinCost === 0 ? 'Free' : spinCost;

  return (
    <Flex crossAxis="center" as="span" columnGap={4}>
      <ImageIcon src="/images/icons/horseshoe.png" alt="icon of SpinCost" />
      <span>{label}</span>
    </Flex>
  );
};
