import City from "../../types/City";
import CityQuery from "../../types/CityQuery";

const   CITIES_HOST = "http://localhost:3001/api/cities",
        CITIES_PARAMS = {
            country: "country",
            search: "search",
            limit: "limit",
            from: "from"
        },
        DEFAULT_LIMIT = 50,
        DEFAULT_FROM = 0;


function parseRawCities(rawCities: any[]): City[] {

    let cities: City[] = [],
        fallbackMessage = "Unknown";

    if (rawCities && rawCities.length) {
        
        rawCities.forEach(rawCity => {

            if (rawCity && rawCity.name) {
                cities.push({
                    name: rawCity.name,
                    country: (rawCity.country ? rawCity.country : fallbackMessage),
                    subcountry: (rawCity.subcountry ? rawCity.subcountry : fallbackMessage),
                    geonameid: (rawCity.geonameid ? rawCity.geonameid : null)
                })
            }
        })
    }

    return cities;
}

async function handleResponse(response: Response): Promise<City[]> {

    let cities: City[] = [],
        rawCities: any[];
    
    if (response && response.ok) {
        rawCities = await response.json();
        cities = parseRawCities(rawCities);
    }

    return cities;
}

async function request(endpoint: string): Promise<City[]> {

    let cities: City[] = [],
        response: Response;

    if (endpoint) {
        response = await fetch(endpoint);
        cities = await handleResponse(response);
    }

    return cities;
}

export async function getCities(cityQuery: CityQuery): Promise<City[]> {

    let cities: City[] = [];

    if (!cityQuery.limit) cityQuery.limit = DEFAULT_LIMIT;
    if (!cityQuery.from) cityQuery.from = DEFAULT_FROM;

    let endpoint =  (
        CITIES_HOST
        + `?${CITIES_PARAMS.limit}=${cityQuery.limit}`
        + `&${CITIES_PARAMS.from}=${cityQuery.from}`
        + (cityQuery.country ? `&country=${cityQuery.country}` : "")
        + (cityQuery.search ? `&search=${cityQuery.search}` : "")
    )
    
    cities = await request(endpoint);

    return cities;
}

const CityService = {
    getCities,
}

export default CityService;
