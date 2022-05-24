import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TReceiverAction = ActionType<typeof actions>;

export type TReceiverState = {
  userId: number;
};
