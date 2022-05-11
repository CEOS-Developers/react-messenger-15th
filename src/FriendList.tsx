import styled  from "styled-components";
import {useState , useCallback} from "react";
import { FriendItem } from "./type";
import user from "./data/user.json";

function FriendList(){

    const [search, setSearch] = useState<string>("");
    const [friendList, setFriendList] = useState<FriendItem[]>(user);
  
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

      `

      const FriendBox = styled.div
      `  flex:0.1;
         background-color:red;

      `;

      const FriendProfile =styled.img
    `
    
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin:10px;
    `;


      const FriendName = styled.div
      `  
      text-align:left;
      margin-left:10px;
      font-size:13px;
        
      `;

      const FriendIntro = styled.span
      `
      margin-left : 5px;
      font-size:10px;
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

             <FriendBox>
                 
                    {
                        searchFriend.map((friend)=> (
                   <>
                   <FriendProfile src = {friend.profile}/>
                  <FriendName>{friend.name}</FriendName>
                   <FriendIntro>{friend.intro}</FriendIntro>
                   </> 
                   ))
                }
                  
            
            </FriendBox>
       </div> 
    );

}

export default FriendList;