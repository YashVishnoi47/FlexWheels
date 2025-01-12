// Fetching data of cars from the API.
export async function fetchcars(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturers}&model=${model}`;

  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function fetchcars2(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=bmw&model=x1`;

  try {
    const response = await fetch(url, { headers });

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function fetchcars3(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=bmw&model=m8`;

  try {
    const response = await fetch(url, { headers });

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function fetchcars4(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi&model=q7`;

  try {
    const response = await fetch(url, { headers });

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function fetchcars6(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=lamborghini&model=urus`;

  try {
    const response = await fetch(url, { headers });

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function fetchcars5(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi&model=q3`;

  try {
    const response = await fetch(url, { headers });

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}

export async function fetchcars7(filters) {
  const { manufacturers, year, model, limit, fuel } = filters;

  const headers = {
    "x-rapidapi-key": "11286effd3msh3ddb58f975f0eb7p15d842jsnab1c81e98435",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=lamborghini&model=huracan`;

  try {
    const response = await fetch(url, { headers });

    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
}
