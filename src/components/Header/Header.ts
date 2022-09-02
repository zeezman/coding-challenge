import React, { useState, useEffect} from "react"; 
import { Link } from "react-router-dom"; 
import { classView } from "../../features/classView";
// import { useAppSelector, } from '../app/hooks'
import "./Header.scss"; 

const Header = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState({})  
  // const numOfClasses = useAppSelector(state => state.class.student)
  

  const submitHandler = async () => { 
    if (term) {
      fetchData(); 
      setTerm('') 

      // const filteredStudent = result.filter((student) => student.first_name.toLowerCase().includes(term)
    
  }

  const url = "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes?api_key=keya2imjtm5C4d1gK";

  const fetchData = async () => {
      try {
          const response = await fetch(url);
          const data = await response.json(); 
          console.log(data.records[0].fields);
          setResult(data.records[0].fields);
          // setResult(data);
      } catch (error) {
          console.log("error", error);
      }
  }; 
  
  useEffect(() => {
      fetchData();
  }, []);
 
  return (
    <main className="container">
      <div className="rol">
        <Link to="/">Coding Challenge</Link>
        <button className="btn">log out</button>
      </div> 
      <div className="search-bar">
          <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Student Name:</label>
              <input
              className="input"
                type="text"
                value={term}
                placeholder="Search Class"
                onChange={(e) => setTerm(e.target.value)} />   <br /> <br />
              <button type="submit" onClick={submitHandler}> Login </button> 
          </form>      
      </div>  

      /////// using array map to display data //////////
      //  <section className='photos'>
      //     <div className='photos-center'>
      //       {result && (result).map((results, index) => {
      //         return <classView key={index} results={results} />;
      //       })}
      //     </div>
      // </section> 

      //////// Using object method to display data /////////
      {/* {result && (
            <div className="profile">
                <h3>{result.Name}</h3>
                <p>{result.class}</p> 
            </div>
        )}  */}
          
    </main>
  );
};

export default Header;    
