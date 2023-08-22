import React from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { url, geo_options } from "../../Geo_API"

export default function Search(props) {

    const [search, setSearch] = React.useState(null);

    function handleChange(searchData) {
        setSearch(searchData);
        props.onSearchChange(searchData)
    }

    const loadOptions= (inputValue) =>{
        return fetch(`${url}?minPopulation=100000&namePrefix=${inputValue}`, geo_options)
            .then(res => res.json())
            .then(res => {
                return {
                    options: res.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch((error) => console.log(error));
    }
    return (

        <AsyncPaginate
            placeholder="Enter city name"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    )
}