import React from 'react';

const ShowDetails = (props) => {
      const {name,capital,population, area} = props.details
      return (
            <div>
                 
                 <p>{name.common}</p>
                 <p> Capital : {capital}</p>
                <p>Popultaion : {population}</p>
                <p>Area : {area}</p>
            </div>
      );
};

export default ShowDetails;