import styled  from "styled-components";
import {useState , useCallback} from "react";
import { FriendItem } from "./type";
import user from "./data/user.json";

function FriendList(){

    const [search, setSearch] = useState<string>("");
    const [friendList, setFriendList] = useState<FriendItem[]>(user); //이거왜오류발생..?(갑자기 FriendItem 속성에 profile이 없다고 뜨는..)
  
    const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {setSearch(event.target.value)},[]);
   
    const searchFriend = friendList.filter((friend) => {
        return friend.name.includes(search);
      });

    const Input = styled.input
      `
      font-family: 'SuncheonB';
      width: 200px;
      height: 50px;
      border-radius: 9px;
      margin:10px;
     

      `;

    const FriendContainer = styled.div
    `
      display:flex;
      display: inline-block
      flex-direction:column;
       
    `;
    
      const FriendProfile =styled.img
    `
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border:1px solid lightgrey;
    margin:10px;
    cursor:pointer;
    `;


      const FriendName = styled.div
      `  
      text-align:left;
      padding:20px;
      font-size:14px;
        
      `;

    
      const FriendIntro = styled.div
      `

      
      {
      position: relative;
      width: 60px;
      height: 10px;
      padding: 5px;
      margin-top:15px;
      background: #FFFFFF;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
      border: #7E7F7F solid 2px;
      font-size : 13px;
      
      }
      
      :after
      {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 5px 7px 0;
      border-color: #FFFFFF transparent;
      display: block;
      width: 0;
      z-index: 1;
      bottom: -5px;
      left: 17px;
      }
      
      :before
      {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 6px 8px 0;
      border-color: #7E7F7F transparent;
      display: block;
      width: 0;
      z-index: 0;
      bottom: -8px;
      left: 16px;
      }
     
      `;
    return(
       <div id ="Wrapper">
           <Input
           onChange={onChange}
           value={search}
           type="text"
           placeholder="친구 검색"
           autoFocus = {true}
           spellCheck="false"
                
              />
              {
              searchFriend.map((friend)=> (
              <>
              <FriendContainer>
              <FriendProfile src = {friend.profile}/>
              <FriendName>{friend.name}</FriendName>
              <FriendIntro>{friend.intro}</FriendIntro>
              </FriendContainer>
              </>
              ))
              }

       </div> 
    );

}

export default FriendList;