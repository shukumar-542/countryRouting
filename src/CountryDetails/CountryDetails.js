import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowDetails from '../Components/ShowDetails/ShowDetails';

const CountryDetails = () => {
      const {countryname} =useParams()
      const [country , setCountry] = useState([])
      console.log(country);
      useEffect(()=>{
            const urls = `https://restcountries.com/v3.1/name/${countryname}`
            fetch(urls)
            .then(res => res.json())
            .then(data =>{ setCountry(data)
            // console.log(data);
            })
      },[])
      return (
            <div>
                  <h1>Country Details  {countryname}</h1>
                  {
                        country.map(details => <ShowDetails details ={details}></ShowDetails> )
                  }
            </div>
      );
};

export default CountryDetails;