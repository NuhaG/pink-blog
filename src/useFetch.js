import { useEffect, useState } from "react";

// custom hooks: used for reusing hooks

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                setPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]); 
    // using url as a prop and dependency so that it rerenders as soon as the fetch url changes

    return {data,isPending,error}
}

export default useFetch;