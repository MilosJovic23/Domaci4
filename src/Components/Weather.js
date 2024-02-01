
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

        let newCity={
            City:city,
            Country:country,
            Temperature:temperature,
        }
           setCities(prev=>[...prev,newCity])
            console.log(cities)
        }



    return(
        <>
            <div className="w-75 d-flex gap-2">
                <input className="form-control w-25" type="text" placeholder="City" onInput={(e) => {
                    setCity(e.target.value)
                }}/>
                <input className="form-control w-25" type="text" placeholder="Country" onInput={(e) => {
                    setCountry(e.target.value)
                }}/>
                <input className="form-control w-25" type="number" placeholder="Temperature in C˚" onInput={(e) => {
                    setTemperature(e.target.value)
                }}/>
                <button className="btn btn-outline-dark text-white" onClick={addCity}>Add City</button>


            </div>


            <div className="w-75 h-50 d-flex gap-3 text-white citiesData">
                <div className="mb-0">
                    {cities.map((city) => (
                        <p>{city.City}</p>))}
                </div>
                <div>
                    {cities.map((country) => (
                        <p>{country.Country}</p>))}
                </div>
                <div>
                    {cities.map((temp) => (
                        <p>{temp.Temperature}</p>))}
                </div>

            </div>
        </>
    )
}


export default Weather;