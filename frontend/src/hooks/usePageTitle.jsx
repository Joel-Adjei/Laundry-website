import {useEffect} from "react";

const usePageTile =(title = "")=>{
    useEffect(()=>{
        document.title = "Naems Laundry - "+title;
    },[title])
}

export default usePageTile;