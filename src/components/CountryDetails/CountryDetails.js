import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    
    const {countryId} = useParams()
    const {countryDetails, setCountryDetails} = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.name))
    })
    return (
        <div>
            {/* <p>Country Name: {countryDetails.name} </p> */}
            <p>Id: {countryId} </p>
        </div>
    );
    
};

export default CountryDetails;