import { useResetRecoilState } from "recoil";
import { userState } from "../recoil";

function ResetUser(){
    const resetUser = useResetRecoilState(userState);
    resetUser();

}

export default ResetUser;