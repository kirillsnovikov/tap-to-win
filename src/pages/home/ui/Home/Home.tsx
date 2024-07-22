import { TotalCoins } from '@src/entities/session/ui/TotalCoins/TotalCoins';
import { Flex } from '@src/shared/ui/Flex';
import { SlotMachine } from '@src/widgets/slot-machine';

export const Home = () => (
  <Flex center flow="column" rowGap={28}>
    <TotalCoins />
    <SlotMachine />
  </Flex>
);
