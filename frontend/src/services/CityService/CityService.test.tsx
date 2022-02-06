
import CityService, { parseRawCities, request, getCities } from "./CityService";

import City from "../../types/City";
import CityQuery from "../../types/CityQuery";

import { rawCities, cities } from "./MockData";


test("Testing CityService - parseRawCities", () => {
    let parsedCities: City[] = parseRawCities(rawCities);
    expect(parsedCities).toEqual(expect.arrayContaining(cities));
})


test("Testing CityService - request", async () => {

    let result: City[] = await request("http://localhost:3001/api/cities?limit=50&from=0");
    expect(result).toEqual(expect.arrayContaining(cities)); 

})


test("Testing CityService, getCities", async () => {

    let cityQuery: CityQuery = {};

    let results: City[] = await getCities(cityQuery);

    // returns countries with default cityQuery data
    expect(results.length).toBeGreaterThan(1);


    cityQuery = {
        country: "",
        search:"",
    }

    results = await getCities(cityQuery);

    // returns countries with empty country and search
    expect(results.length).toBeGreaterThan(1);

    // wrong country
    cityQuery = {
        country: "dsgfsddgsfg",
        search:"",
    }

    results = await getCities(cityQuery);
    
    // returns an array despite not having an api response
    expect(results).toStrictEqual([])
    expect(results).toHaveLength(0)


    // Specified country and city
    cityQuery = {
        country: "Spain",
        search:"Madrid",
    }

    results = await getCities(cityQuery);

    expect(results.length).toBeGreaterThanOrEqual(4);
    
})
