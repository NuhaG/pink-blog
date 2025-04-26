import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Neha'); {/*Hook: used to re-render on page, first val is initial val and its updated using the second func*/}
    const [age,setAge] = useState(18);

    const handleClick = (e) => {
        setName('Sam');
        setAge(20);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Home;