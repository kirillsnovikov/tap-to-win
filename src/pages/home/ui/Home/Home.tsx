import { Flex } from '@src/shared/ui/Flex';
import { PlayerInfo } from '@src/widgets/player-info';
import { SlotMachine } from '@src/widgets/slot-machine';

export const Home = () => (
  <Flex center flow="column" rowGap={28}>
    <PlayerInfo />
    <SlotMachine />
  </Flex>
);
