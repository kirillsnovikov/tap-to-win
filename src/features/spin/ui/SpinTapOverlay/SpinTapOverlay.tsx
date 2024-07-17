import { getRandomCombination } from '@src/entities/slot-machine/lib/getRandomConbination';
import { UnstyledButton } from '@src/shared/ui/UnstyledButton';

import { useSpin } from '../../model';

import type { UnstyledButtonProps } from '@src/shared/ui/UnstyledButton/types';

export const SpinTapOverlay: React.FC<UnstyledButtonProps<'button'>> = ({ onClick, ...rest }) => {
  const { spin } = useSpin();

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    // TODO: сюда подставляем комбинацию вместо заглушки getRandomCombination()
    spin(getRandomCombination());
  };
  return <UnstyledButton {...rest} onClick={onClickHandler} type="button" aria-label="spin" />;
};
