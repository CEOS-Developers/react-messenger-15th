import { combineReducers } from 'redux';
import { receiver } from './receiver';
import { chats } from './chats';

export const rootReducer = combineReducers({ receiver, chats });
