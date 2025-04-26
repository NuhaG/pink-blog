import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...',author: 'mario', id:1 },
        { title: 'Welcome party!', body: 'lorem ipsum...',author: 'yoshi', id:2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...',author: 'marlin', id:3 }
    ]);
    // two options to allow using the val def here in blogList.js -> write the whole def like above or use props (more reusable, allows to use in home component later on)
    // props are a way to pass data from parents component to child component
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/> {/*Passes blogs as a prop*/}
        </div>
     );
}
 
export default Home;