
import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Weather(){
        let [city,setCity]=useState();
        let [country,setCountry]=useState()
        let [temperature,setTemperature]=useState()
        let [cities,setCities]=useState([])



        function addCity(){
        if( city=== "" || country === "" || temperature===""){
            return
        }

        let newCity=[{
            City:city,
            Country:country,
            Temperature:temperature,
        }]
           setCities(prev=>[...prev,newCity])
            console.log(cities)
        }



    return(
        <>

            <input type="text" placeholder="City" onInput={(e) => {
                setCity(e.target.value)
            }}/>
            <input type="text" placeholder="Country" onInput={(e) => {
                setCountry(e.target.value)
            }}/>
            <input type="number" placeholder="Temperature in C˚" onInput={(e) => {
                setTemperature(e.target.value)
            }}/>
            <button onClick={addCity}>Add City</button>

            <div>
               {cities.map((city,)=>(
                   <p>{city.City}</p>))}
                {cities.map((country)=>(
                    <p>{country.Country}</p>))}
                {cities.map((temp)=>(
                    <p>{temp.Temperature}</p>))}
            </div>
        </>
    )
}


export default Weather;