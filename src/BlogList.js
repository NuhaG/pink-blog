const BlogList = ({blogs, title}) => {
//     const handleDelete = (id) => {}
//  don't define the function here as it won't edit the main data define it in home.js and then pass it as a prop here

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> ( 
                <div className="blog-preview" key = {blog.id}> 
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
