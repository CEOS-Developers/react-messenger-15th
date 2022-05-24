import { createAction } from 'typesafe-actions';

export const INITIALIZE = 'receiver/INITIALIZE';
export const TOGGLE = 'receiver/TOGGLE';

export const initReceiver = createAction(INITIALIZE)<number>();
export const toggleReceiver = createAction(TOGGLE)<number>();
