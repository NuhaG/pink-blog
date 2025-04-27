import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); {/*we use abort controller so that it stops fetching the data as soon as another link is cliked, like we don't want the home page content to continue to be fetched in the background when we call the newBlog page*/}

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
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
                if(err.name === 'AbortError'){
                    console.log("Fetch aborted");
                } else {
                setPending(false);
                setError(err.message);
                }
            })
        }, 1000);

        return () => abortCont.abort();
        {/*above return func runs as soon as a link clicked, we use the signal to stop the fetch*/}
    }, [url]);

    return {data,isPending,error}
}

export default useFetch;