import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, []); 
    // you can't make this async as we cannot use await inside it, you can externalize the whole func make that asyn then use it in useEffect
    // res is just the response object and inorder to get the data we use a func
    // at the very beg it will give an error as blogs is set to null initially and is passed to the bloglist.js where it map is used, which cannot func on nulll

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* Runs only when blogs is not null*/}
        </div>
     );
}

export default Home;