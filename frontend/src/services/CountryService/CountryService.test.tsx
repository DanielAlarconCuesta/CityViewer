import CountryService from "./CountryService";

import MockData from "./MockData";

import Country from "../../types/Country";

test("Testing CountryService - getCountries", async () => {

    let results = await CountryService.getCountries();
    expect(results.length).toBeGreaterThan(50);
})
