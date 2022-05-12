import { useNavigate } from "react-router-dom";

type INavigator = {
    event : React.MouseEvent<HTMLDivElement>;
    roomId : number
}

const useNavigator = () =>{
       const navigate = useNavigate();

    const FriendListLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/' ,  { replace: true });
    }

    const ChatRoomListLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/ChatRoomList',  { replace: true });
    }
    

    return {FriendListLink,ChatRoomListLink};
};

export default useNavigator;