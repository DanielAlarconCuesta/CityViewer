import { useEffect, useState } from "react";

import City from "../../types/City";

import CityQuery from "../../types/CityQuery";

import "./Table.css";

import CityService from "../../services/CityService/CityService";
import CountryService from "../../services/CountryService/CountryService";

export const Table = () => {
	const [cities, setCities] = useState<City[] | null>(null);

	useEffect(() => {
			

			let cityQuery: CityQuery = {
				country: "Spain",
				search: "Barcelona"
			}

			CityService.getCities(cityQuery).then(setCities);
			CountryService.getCountries().then(countries => console.log(countries));
	}, []);

	return (
		<div id="cities-table-wrapper">
			<table>
				<thead>
					<tr>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{cities?.map((city, index) => (
						<tr key={index}>
							<td>{city.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
