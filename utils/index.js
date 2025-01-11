// Fetching data of cars from the API.
export async function fetchcars() {
  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
};
