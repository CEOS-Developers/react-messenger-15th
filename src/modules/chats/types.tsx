import { ActionType } from 'typesafe-actions';
import { IChats } from '../../types';
import * as actions from './actions';

export type TChatsAction = ActionType<typeof actions>;

export type TChatsState = {
  data: IChats;
};
