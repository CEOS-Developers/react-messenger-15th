import styled, { css } from 'styled-components';
import { Chats, Chat } from '../../types/index';
import me from '../../assets/me.json';
import friends from '../../assets/friends.json';
import { GetTime } from '../../utils/GetTime';

type ChatRoomMainProps = {
  receiverUserId: string;
  chatList: any;
};

export function ChatRoomMain({ receiverUserId, chatList }: ChatRoomMainProps) {
  const receiverUserName = friends.filter(
    (friend) => friend.userId === receiverUserId
  )[0].userName;

  return (
    <ChatRoomMainBlock>
      {chatList.chats.map(({ userId, msg, timestamp }: Chat, idx: number) => (
        <ChatWrapper key={idx} userId={userId}>
          <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
          <TextWrapper>
            <UserName userId={userId}>
              {userId === 'user0' ? me.userName : receiverUserName}
            </UserName>
            <ChatInfoWrapper userId={userId}>
              <Bubble userId={userId}>{msg}</Bubble>
              <Time>{GetTime(timestamp)}</Time>
            </ChatInfoWrapper>
          </TextWrapper>
        </ChatWrapper>
      ))}
    </ChatRoomMainBlock>
  );
}

const ChatRoomMainBlock = styled.div`
  width: 100%;
  height: 75%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
`;

const ChatWrapper = styled.div<{ userId: any }>`
  max-width: 95%;
  margin: 4%;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 10%;
  height: 10%;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 88%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div<{ userId: any }>`
  width: 100%;

  font-size: 14px;
  color: #343a40;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
`;

const ChatInfoWrapper = styled.div<{ userId: any }>`
  width: 100%;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div<{ userId: any }>`
  padding: 3%;
  margin-top: 2.5%;

  font-size: 12px;
  line-height: 18px;

  display: flex;

  ${({ userId }) =>
    userId === 'user0'
      ? css`
          flex-direction: row-reverse;
          color: #ffffff;
          background: #1986fc;
          border-radius: 12px 1px 12px 12px;
        `
      : css`
          flex-direction: 'row';
          color: #000000;
          background: #f1f1f3;
          border-radius: 1px 12px 12px 12px;
        `}
`;

const Time = styled.div`
  color: #c8c8c8;
  font-size: 10px;
  margin: 0 2%;

  display: flex;
  align-items: end;
`;

//   return (
//     <ChatRoomMainBlock>
//       {chatList.chats.map(({ userId, msg, timestamp }: Chat, index: number) => (
//         <ChatItem key={index} userId={userId}>
//           <img src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
//           <TextWrapper>
//             <UserName userId={userId} />
//             <InfoWrapper userId={userId}>
//               <Bubble userId={userId}>{msg}</Bubble>
//               <Time>{GetTime(timestamp)}</Time>
//             </InfoWrapper>
//           </TextWrapper>
//         </ChatItem>
//       ))}
//     </ChatRoomMainBlock>
//   );
// }

// const ChatRoomMainBlock = styled.main`
//   width: 100%;
//   height: 75%;

//   overflow-y: auto;

//   &::-webkit-scrollbar {
//     width: 20px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #e2e2e2;
//     background-clip: padding-box;
//     border-radius: 20px;
//     border: 8px solid transparent;
//   }

//   display: flex;
//   flex-direction: column;
// `;

// const ChatItem = styled.div<{ userId: string }>`
//   width: 90%;
//   margin: 3.5%;

//   display: flex;
//   flex-direction: ${({ userId }) =>
//     userId === me.userId ? 'row-reverse' : 'row'};
//   justify-content: flex-start;

//   img {
//     width: 10%;
//     height: 10%;
//     /* flex: 1; */

//     border-radius: 50%;
//     object-fit: cover;
//   }
// `;

// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: inherit;
// `;

// const Img = styled.img`
//   width: 10%;
//   height: 10%;

//   border-radius: 50%;
//   object-fit: cover;
// `;

// const UserName = styled.div<{ userId: any }>`
//   width: 100%;

//   font-size: 14px;
//   color: #343a40;

//   display: flex;
//   flex-direction: ${({ userId }: any) =>
//     userId === 'user0' ? 'row-reverse' : 'row'};
// `;

// const InfoWrapper = styled.div<{ userId: any }>`
//   width: 100%;

//   display: flex;
//   flex-direction: ${({ userId }: any) =>
//     userId === 'user0' ? 'row-reverse' : 'row'};
// `;

// const Bubble = styled.div<{ userId: any }>`
//   padding: 3%;
//   margin-top: 2.5%;

//   font-size: 12px;
//   line-height: 18px;

//   display: flex;

//   ${({ userId }: any) =>
//     userId === 'user0'
//       ? css`
//           flex-direction: row-reverse;
//           color: #ffffff;
//           background: #1986fc;
//           border-radius: 12px 1px 12px 12px;
//         `
//       : css`
//           flex-direction: 'row';
//           color: #000000;
//           background: #f1f1f3;
//           border-radius: 1px 12px 12px 12px;
//         `}
// `;

// const Time = styled.div`
//   color: #c8c8c8;
//   font-size: 10px;
//   margin: 0 2%;

//   display: flex;
//   align-items: end;
// `;
