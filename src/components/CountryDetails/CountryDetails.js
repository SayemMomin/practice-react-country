import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    
    const {countryId} = useParams()
    const [countryDetails, setCountryDetails] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            setCountryDetails(data[0])
        })
    }, [])

    const countryDetailsStyle = {
        border: '2px solid red',
        margin: '5px',
        padding: '10px',
    }
    return (
        <div style={countryDetailsStyle}>
            <h5>Country Details here..........</h5>
            <p>Country Name: {countryDetails.name} </p>
            <p>Region: {countryDetails.region} </p>
            <p>Capital: {countryDetails.capital} </p>
            <p>Id: {countryId} </p>
        </div>
    );
    
};

export default CountryDetails;