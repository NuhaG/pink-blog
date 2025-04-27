import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...',author: 'mario', id:1 },
        { title: 'Welcome party!', body: 'lorem ipsum...',author: 'yoshi', id:2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...',author: 'mario', id:3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("useEffect");
        console.log(blogs);
    }); 
    // runs a func every render of the page, does not return anything takes a func that runs everytime there is a re-render  
    // be careful about changing the state inside useEffect, cont loop , initial render will trigger useEffect func to run that would then update the state and the state would change and that would trigger a re-render -> useEffect-> loop

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> 
        </div>
     );
}

export default Home;