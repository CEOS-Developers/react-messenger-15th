import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Input } from "../BasicListDesign";
import { searchState } from "../../recoil";

function Search(){
    
    const search = useRecoilValue(searchState);
    const setSearch = useSetRecoilState(searchState);

    const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {setSearch(event.target.value)},[]);

    return(

        <Input
           onChange={onChange}
           value={search}
           type="text"
           placeholder="🔎친구 검색"
           autoFocus = {true}
           spellCheck="false"
           />
    );

}

export default Search;