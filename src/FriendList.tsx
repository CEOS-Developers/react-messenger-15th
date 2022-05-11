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
      font-size:13px;
        
      `;

    
      const FriendIntro = styled.div
      `
      padding:20px;
      margin-left : 0px;
      font-size:12px;
      color:skyblue;
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