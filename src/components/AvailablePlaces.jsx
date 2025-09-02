import Places from './Places.jsx';
import {useEffect,useState} from 'react';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({onSelectPlace}) {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces,
        setAvailablePlaces] = useState([]);
      
    useEffect(() => {
       async function fetchPlaces() {
        setIsFetching(true);
       
        const response  = await fetch('http://localhost:3000/places'); 
        const resData = await response.json();
        if (!response.ok)
            throw new Error(resData.message || 'Could not fetch places.');
        navigator.geolocation.getCurrentPosition((position) =>{
        const sortedPlaces = sortPlacesByDistance(
                resData.places, 
                position.coords.latitude, 
                position.coords.longitude); 
            setAvailablePlaces(sortedPlaces);
            setIsFetching(false);
        },(error) => {
            console.log('Geolocation error:', error);
            // Se la geolocalizzazione fallisce, usa i dati senza ordinamento
            setAvailablePlaces(resData.places);
            setIsFetching(false);
          });  
    } fetchPlaces();}, []);
    return (<Places
        title="Available Places"
        places={availablePlaces}
        loadingText="Fetching place data"
        isLoading={isFetching}
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}/>);
}
