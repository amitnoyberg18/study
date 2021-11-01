import { useEffect, useState } from "react"

export const useFetch = (url)=>{
    const [data,setData] = useState({data: null, loading: true});

    useEffect(()=>{
        setData((data)=>{
            return {data: data.data, loading: true}
        });
        fetch(url)
        .then(x=> x.text())
        .then(y => {
            console.log(y);
            setData({data:y, loading:false});
        });
    },[url,setData]);

    return data;
}