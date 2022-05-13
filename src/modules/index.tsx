import { combineReducers } from 'redux';
import { receiver } from './receiver';
import { chatList } from './chatList';

export const rootReducer = combineReducers({ receiver, chatList });
