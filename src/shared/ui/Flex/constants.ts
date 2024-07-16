export enum FlexFlow {
  Column = 'column',
  Row = 'row',
}

export enum MainAxisAlignment {
  Start = 'start',
  Center = 'center',
  End = 'end',
  SpaceBetween = 'spaceBetween',
}

export enum CrossAxisAlignment {
  Start = 'start',
  Center = 'center',
  End = 'end',
  Stretch = 'stretch',
  Baseline = 'baseline',
}

export const gapSizes = [2, 4, 8, 12, 16, 20, 28] as const;
