import { atom } from "recoil";

export interface IUserTypes {
    id: string;
    profileName: string;
    profileLink: string;
    profileText: string;
}

export const setUserState = atom<string>({
    key: 'setUserState',
    default: '',
});

  // 업데이트 시킬 Todos atom 배열
export const usersState = atom<IUserTypes[]>({
    key: 'users',

default: [
    {
        id: 'user0',
        profileName: 'Vanellope von Schweetz',
        profileLink: 'Img0',
        profileText: 'I can feel it in my code!',
    },
    {
        id: 'user1',
        profileName: 'Wreck-It Ralph',
        profileLink: 'Img1',
        profileText: 'IM GONNA WRECK IT!',
    },
    {
        id: 'user2',
        profileName: 'Sergeant Calhoun',
        profileLink: 'Img2',
        profileText: 'I am one dynamite woman.',
    },
    {
        id: 'user3',
        profileName: 'Fix-It Felix Jr.',
        profileLink: 'Img3',
        profileText: 'I can fix it!',
    }]
});