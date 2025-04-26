const Home = () => {
    const handleClick = (e) => {
        console.log("Hello World", e); {/* e is event object */}
    }
    const handleClick2 = (name, e) => {
        console.log("Hello " + name,e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click</button> 
            {/* don't use handleClick() as it would invoke the function even brfore clicking the button */}
            <button onClick={(e)=>handleClick2("Nuha",e)}>Click Me</button> 
            {/*Passing parameters is nec nut we do not want to invoke the function so we wrap it in an anonymous func*/}
        </div>
     );
}
 
export default Home;