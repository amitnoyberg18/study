import { useEffect, useRef, useState } from "react"

export const useFetch = (url)=>{
    const isCurrent = useRef(true);
    const [data,setData] = useState({data: null, loading: true});

    useEffect(()=>{
        isCurrent.current=true;
        return ()=>{
            //called when the componenet is is going to unmount
            isCurrent.current = false;
        }
    },[])

    useEffect(()=>{
        setData((data)=>{
            return {data: data.data, loading: true}
        });
        fetch(url)
        .then(x=> x.text())
        .then(y => {
            setTimeout(() => {    
                if(isCurrent.current){
                    setData({data:y, loading:false});
                }
            }, 2000);
            
        });
    },[url,setData]);

    return data;
}