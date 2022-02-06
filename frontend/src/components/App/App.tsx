
import React, { useState, useCallback, useRef } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

import City from "../../types/City";
import CityQuery from "../../types/CityQuery";

import useFetchCities from "../../hooks/useFetchCities";

import "./App.css";

const LIMIT = 50;

function App() {

	const [cityQuery, setCityQuery] = useState<CityQuery>({
		limit: LIMIT,
		from: 0,
		search: ""
	});

	const [cities, setCities] = useState<City[]>([]);
	const [searcherValue, setSearcherValue] = useState("");
	
	const { loading, error, hasMore } = useFetchCities(cityQuery, cities, setCities);
	const observer: any = useRef(); // (*)
	
	const lastCityElementRef = useCallback(  // (*)

		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			const option = {
				root: null,
				rootMargin: "20px",
				threshold: 0
			  };

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setCityQuery((prevCityQuery) => ({...prevCityQuery, from: ((prevCityQuery.from || 0) + (prevCityQuery.limit || 0))}));
				}
			}, option);

			if (node) {
				observer.current.observe(node)
			};
		},
		[loading, hasMore]
	);

	const handleCountryClick = async (countryName: string = "") => {

    	if (countryName != cityQuery.country) {
			await setCities([]);
			await setSearcherValue("");

      		setCityQuery({
				  ...cityQuery, 
				  country: countryName,
				  from: 0
			});
    	}
	}

	const handleSearhOnChange = async function(value: string) {

		await setCities([]);

		setCityQuery({
			...cityQuery,
			search: value,
			from: 0
	  });
	}

  	return (
		<div className="App">
			<aside>
				
				<div>
					<h2>Cities App</h2>
				</div>
				
				<Sidebar 
					className="pepe" 
					onCountryClick={handleCountryClick}
				/>
				
			</aside>
			<Main 
				handleSearhOnChange={handleSearhOnChange} 
				searcherValue={searcherValue}
				lastCityElementRef={lastCityElementRef}  
				cities={cities} 
			/>
    	</div>
  	);
}

export default App;
