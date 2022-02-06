import { useState, useEffect, useCallback } from "react";

import CityService from "../services/CityService/CityService";

import CityQuery from "../types/CityQuery";
import City from "../types/City";

function useFetchCities(cityQuery: CityQuery, cities: City[], setCities: any): any {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const sendQuery = useCallback(async () => {

    await setLoading(true);
    await setError(false);
    
    await CityService.getCities(cityQuery).then((newCities: City[]) => {

        if (newCities.length > 0) {
            setCities([...cities, ...newCities])
            setHasMore(true);
        } else {
            setHasMore(false);
        }
    })

    setLoading(false);

  }, [cityQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    sendQuery();
  }, [cityQuery, sendQuery]);

  return { loading, error, hasMore };
}

export default useFetchCities;
