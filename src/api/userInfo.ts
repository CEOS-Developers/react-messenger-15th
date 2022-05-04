import { useRecoilValue } from 'recoil';
import { UserType } from '../Interface';
import { users } from '../store/recoil/recoil';

export const GetUserInfoById = (userId: number) => {
    const userData = useRecoilValue<UserType[]>(users);
    const userObj = userData.filter((user) => user.userId === userId);
    return userObj;
};
