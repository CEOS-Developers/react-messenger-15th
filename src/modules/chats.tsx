import chatsData from '../assets/json/chatsData.json';

const INITIALIZE = 'chats/INITIALIZE';
const CONCAT = 'chats/CONCAT';

export function initChats(partnerUserId: any) {
  return { type: INITIALIZE, partnerUserId };
}

export function concatNewChat(newChat: any) {
  return { type: CONCAT, newChat };
}

const initialState = {
  data: [
    {
      userId: 0,
      msg: 'Dummy',
      unixTime: 0,
    },
  ],
};

export function chats(state = initialState, action: any): any {
  switch (action.type) {
    case INITIALIZE:
      const chatsWithPartner = chatsData.filter(
        (friend) => friend.userId === action.partnerUserId
      )[0].data;
      return {
        ...state,
        data: chatsWithPartner,
      };
    case CONCAT:
      return {
        ...state,
        data: state.data.concat(action.newChat),
      };
    default:
      return state;
  }
}
