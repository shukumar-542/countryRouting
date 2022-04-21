import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
      // console.log(props.country);
      const {name, capital, area,population} = props.country;

      const countryStyle = {
            border : '1px solid purple',
            margin : '10px 150px',
            padding: '20px',
            borderRadius : '10px',
            textAlign : 'center'
      }
      return (
            <div style={countryStyle}>
            
                <p>Name : {name.common}</p>
                <p> Capital : {capital}</p>
                <p>Popultaion : {population}</p>
                <p>Area : {area}</p>
                <Link to={`/name/${name.common}`}> Show Details</Link>
                
            </div>
      );
};

export default Country;