import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
   //console.log(props.country)
    const {name, capital, population, alpha2Code} = props.country
    
    const history = useHistory();
    
    const handleClicked = (countryId) => {
        console.log('click')
        history.push(`/country/${countryId}`);
    }
    const countryStyle = {
        border: '2px solid red',
        margin: '5px',
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
           <h3>Country Name: {name} </h3> 
           <h4>Capital: {capital} </h4>
           <h4>Population: {population} </h4>
           <h4>Country Code: {alpha2Code}</h4>
           <p><Link to={`/country/${alpha2Code}`}>Show Details</Link></p>
           <button style={{backgroundColor: 'lightblue'}} onClick={() => handleClicked(alpha2Code)}>Click here</button>
        </div>
    );
};

export default Country;