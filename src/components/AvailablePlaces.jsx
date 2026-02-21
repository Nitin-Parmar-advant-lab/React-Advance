import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import {sortPlacesByDistance} from "../loc.js"
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlace, setAvailablePlace] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    // useEffect( () => {
    //     fetch("http://localhost:3000/places")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((resData) => {
    //             setAvailablePlace(resData.places);
    //         })},
    //     []
    // );

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const places = await fetchAvailablePlaces()
                
                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        places,
                        position.coords.latitude,
                        position.coords.longitude,
                    );
                    setAvailablePlace(sortedPlaces);
                    setIsFetching(false);
                });
            } catch (error) {
                setError(error);
                setIsFetching(false);
            }

            
        }
        fetchPlaces();
    }, []);

    if (error) {
        return <ErrorPage title="An error occurred!" message={error.message} />;
    }

    return (
        <Places
            title="Available Places"
            places={availablePlace}
            isFetching={isFetching}
            loadingText="Fetching place data..."
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
