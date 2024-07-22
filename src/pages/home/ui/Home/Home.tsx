// import { useSessionStore } from '@src/entities/session/model';
import { Flex } from '@src/shared/ui/Flex';
// import { Typography } from '@src/shared/ui/Typography';
import { SlotMachine } from '@src/widgets/slot-machine';

export const Home = () => (
  // const { player } = useSessionStore();
  <Flex center flow="column">
    {/* <Typography variant="displayXs" color="success">
        {player?.coins}
      </Typography> */}
    <SlotMachine />
  </Flex>
);
