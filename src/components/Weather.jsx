import axios from "axios";
import React, { useState } from "react";
import Conditions from "./Conditions";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
   let [loading, setLoading] = useState(false);


  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
        return setError(true);
    }
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0308fa8114mshaa52c60e1a4af16p1f8832jsn3c9d212cbeda",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    };

    fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
        setResponseObj(response);
        setLoading(false
            );
    })
    .catch(err => {
        setError(true);
        setLoading(false);
    });


    // axios.get(`https://imdb8.p.rapidapi.com/auto-complete/${city}`,{
    //   headers: {
    //     'X-RapidAPI-Key': '0308fa8114mshaa52c60e1a4af16p1f8832jsn3c9d212cbeda',
    //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    //       },
    // })
    // .then(response => {
    //       if (response.cod !== 200) {
    //           throw new Error()
    //       }
    //       setResponseObj(response);
    //       console.log(response);
    //       setLoading(false);
    //   })
    //   .catch(err => {
    //       setError(true);
    //       setLoading(false);
    //   });

//     axios.get(`https://open-weather13.p.rapidapi.com/city/${city}`,{
//   headers: {
//         "X-RapidAPI-Key": "0308fa8114mshaa52c60e1a4af16p1f8832jsn3c9d212cbeda",
//         "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
//       },
// })
// .then(response => {
//   if (response.status !== 200) {
//     throw new Error('Invalid status code: ${response.status}')
//   }
//   setResponseObj(response);
//   setLoading(false);
// })
// .catch(err => {
//   setError(true);
//   setLoading(false);
// });

 }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions responseObj={responseObj}
       error={error} 
       loading={loading} 
      />
    </div>
  );
};
export default Forecast;
