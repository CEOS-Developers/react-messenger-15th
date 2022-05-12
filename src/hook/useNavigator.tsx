import { useNavigate } from "react-router-dom";

const useNavigator = () =>{
       const navigate = useNavigate();

    const FriendListLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/' ,  { replace: true });
    }

    const ChatRoomListLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/ChatRoomList',  { replace: true });
    }
    
    const HomeLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/Home',  { replace: true });
    }

    const SettingLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/Setting',  { replace: true });
    }

    return {FriendListLink,ChatRoomListLink,HomeLink,SettingLink};
};

export default useNavigator;