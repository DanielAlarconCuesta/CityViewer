import React from "react";

import City from "../../types/City";
import "./Table.css";


type TableProps = {
    cities: City[],
	lastCityElementRef: any
}

const LINK_HOST = "https://www.geonames.org/";

function Table(props: TableProps) {
	
	const { cities } = props;

	return (

		<div id="cities-table-wrapper">
			
			<table>
				
				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Sub Country</th>
						<th>Link</th>
					</tr>
				</thead>

				<tbody>
					{
						cities?.map((city, index) => {
							const isLastElement = cities.length === index + 1;
        				
							return (
								<tr 
									key={index} 
									ref={isLastElement ? props.lastCityElementRef : null}
								>
									<td>{city.name}</td>
									<td>{city.subcountry}</td>
									<td>{city.country}</td>
									<td>
										{
											city.geonameid 
												? <a target="_blank" rel="noreferrer" href={`${LINK_HOST}${city.geonameid}`}>See Geoname</a> 
												: <span>Not Available</span>
										}
									</td>
								</tr>
							)
						})

					}
				</tbody>

			</table>				
		</div>
	);
};

export default Table;
