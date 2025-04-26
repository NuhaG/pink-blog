import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...',author: 'mario', id:1 },
        { title: 'Welcome party!', body: 'lorem ipsum...',author: 'yoshi', id:2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...',author: 'marlin', id:3 }
    ]);

    return ( 
        <div className="home">
            {/* map method cycles through each val of an array an performs certain operation*/}
            {/*blog is the val inhand*/}
            {blogs.map((blog)=> ( 
                <div className="blog-preview" key = {blog.id}> {/*key keeps track of changes*/}
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;