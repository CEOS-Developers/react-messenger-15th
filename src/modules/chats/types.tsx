import { ActionType } from 'typesafe-actions';
import { IChats } from '../../types';
import * as actions from './actions';

export type TAction = ActionType<typeof actions>;

export type TState = {
  data: IChats;
};
