  export async function fetchUserPlaces(setUserPlaces) {
      const response = await fetch('http://localhost:3000/user-places');
      const data = await response.json();
      setUserPlaces(data.places);
    }

   export async function updateUserPlaces(userPlaces){
    const response = await fetch('http://localhost:3000/user-places', {
      method: 'PUT',
      body: JSON.stringify({places : userPlaces}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message || 'Could not add place.');
    }
    console.log(resData);
}
