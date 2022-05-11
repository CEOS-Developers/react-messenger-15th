import { Route, Routes } from 'react-router-dom';
import styled  from "styled-components";
import ChatRoom from "./ChatRoom";
import Menu from "./Menu";
import FriendList from './FriendList';
import ChatRoomList from './ChatRoomList';

function App() {
 

const Container = styled.div`

text-align: center;
width: 400px;
height: 600px;
background-color: white;
display: flex;

border-left :0px;
border-radius: 9px;

margin:0 auto;  //중앙에 박스
margin-top: 50px;
box-shadow:3px 3px 3px 3px lightgrey;
 
`;

      return (
    
        /*

         App
         /  \
      Menu   CHatRoom
               /         \           \
               InputForm  UserProfile Message

        */
    <div>
       
       <Container>
         <Menu/>
         <Routes>
           
           
           
           <Route path="/FriendList" element={<FriendList />} />
           <Route path ="/chatroom" element ={<ChatRoom/>}/>
           <Route path ="/ChatRoomList" element ={<ChatRoomList/>}/>
        
        </Routes>
        </Container> 
    </div>
  );
}

export default App;

