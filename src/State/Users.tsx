import { atom } from "recoil";

export interface IUserTypes {
    id: string;
    profileName: string;
    profileLink: string;
    profileText: string;
}

export const setUsersState = atom<string>({
    key: 'users',
    default: '',
});

  // 업데이트 시킬 Todos atom 배열
export const usersState = atom<IUserTypes[]>({
    key: 'users',

    default: [
        {
            id: '0',
            profileName: '바넬로피 본 슈위츠',
            profileLink: '0',
            profileText: 'I feel it in my code!',
        },
        {
            id: '1',
            profileName: '다 부숴 랄프',
            profileLink: '1',
            profileText: '랄프는 부술거야!',
        },
        {
            id: '2',
            profileName: '칼훈 병장',
            profileLink: '2',
            profileText: '항상 줄을 맞춰 서도록.',
        },
        {
            id: '3',
            profileName: '다 고쳐 필릭스',
            profileLink: '3',
            profileText: '내가 다 고칠게!',
        }
    ]
});