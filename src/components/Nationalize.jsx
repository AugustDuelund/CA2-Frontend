import React, {useState, useEffect} from "react";


function Nationalize (props){

  
  const [name, setName] = useState("");
  const [country, setCountry] = useState([]);
  


  const changeName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.nationalize.io/?name=` + name)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCountry(data.country)
      })
  }

    return (
        <div>
          <h2>Nationalize</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={name} onChange={changeName}/>
            </label>
            <button type="submit">Submit</button>
          </form>
          <p>{name}</p>
          <p>{country}</p>
        </div>
      );
}

export default Nationalize;