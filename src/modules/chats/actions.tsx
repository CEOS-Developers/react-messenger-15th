import { createAction } from 'typesafe-actions';
import { IChat } from '../../types';

export const INITIALIZE = 'chats/INITIALIZE';
export const CONCAT = 'chats/CONCAT';

export const initChats = createAction(INITIALIZE)<number>();
export const concatNewChat = createAction(CONCAT)<IChat>();
