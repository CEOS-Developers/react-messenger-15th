import user from "../data/user.json";

const useFilter = ()=>{

    const friendList = user.filter(user => user.id !== 0) //나를 제외한 user 따로 필터링 하기 
    return friendList;
};

export default useFilter;