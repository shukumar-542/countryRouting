import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
      const [countries, setCountry] = useState([])
      useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data =>{ setCountry(data)
            // console.log(data);
            })
      },[])
      return (
            <div>
            <h1 style={{textAlign : 'center', color:'purple'}}>All Countries</h1>
                {
                  countries.map(country => <Country country={country}></Country>)
                } 
            </div>
      );
};

export default Home;