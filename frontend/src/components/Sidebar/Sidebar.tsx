import React, { useEffect, useState } from "react";

import Country from "../../types/Country";
import CountryService from "../../services/CountryService/CountryService";

import "./Sidebar.css";

function Sidebar(props: any) {
  
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    CountryService.getCountries().then(setCountries);
  }, []);

  const [countrySelected, setCountrySelected] = useState("");
  
  	return (

		<div id="sidebar">
			
			<ul>
				<li
					className={(countrySelected === "" ? "highlighted" : "")}
					onClick={() => {
						setCountrySelected("")
						props.onCountryClick("");
					}} 
				>
					All Cities
				</li>
				{
					countries.map(country => (
						<li 
							className={(countrySelected === country.name ? "highlighted" : "")}
							onClick={() => {
								setCountrySelected(country.name)
								props.onCountryClick(country.name);
							}}
							key={country.name}
						>
							{country.name} (<small>{country.count}</small>)
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Sidebar;
