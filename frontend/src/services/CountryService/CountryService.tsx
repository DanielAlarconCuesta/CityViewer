import Country from "../../types/Country";

const COUNTRIES_HOST = "http://localhost:3001/api/countries";

function parseRawCountries(rawCountries: any[]): Country[] {

    let countries: Country[] = [];

    if (!rawCountries || !rawCountries.length) {
        return countries;
    }

    rawCountries.forEach(rawCountry => {

        if (rawCountry && rawCountry.name) {
            
            countries.push({
                name: rawCountry.name,
                count: (rawCountry.count ? rawCountry.count : null)
            })
        }
    })

    return countries;
}

async function handleResponse(response: Response): Promise<Country[]> {

    let countries: Country[] = [],
        rawCountries: any[];

    if (response && response.ok) {
        rawCountries = await response.json();
        countries = parseRawCountries(rawCountries);
    }

    return countries;
}

async function request(endpoint: string): Promise<Country[]> {

    let countries: Country[] = [],
    response: Response;

    if (!endpoint) {
        return countries;
    }

    response = await fetch(endpoint);
    countries = await handleResponse(response);

    return countries;
}

export async function getCountries() {

    const ENDPOINT = COUNTRIES_HOST;
    let countries: Country[] = await request(ENDPOINT);

    return countries;
}


const CountryService = {
    getCountries
}

export default CountryService;
