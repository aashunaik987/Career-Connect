import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': '312a304c97mshb96d94179da3971p1ea07cjsnfbb2c151481c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);

            setData(response.data.data);
        } catch (error) {
            setError(error)
            alert("There is an error")

        } finally {
            setIsLoading(false)

        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return { data, isLoading, error, reFetch };
}
export default useFetch;