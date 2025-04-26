const Home = () => {
    let name = 'Nuha'; {/*Not Reactive so hooks are used, not reactive means it won't re-render the varianble on the page after it updates*/}
    const handleClick = (e) => {
        name = 'Update';
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Home;