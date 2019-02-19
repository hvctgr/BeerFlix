
const API_KEY = '15PKA5T-XCV4K6J-GQ4ZAG0-Q4WX0MX';
const API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/';

const getBeers = () => {
    fetch(`${API_URL}beers?search=pale&limit=10`, {
        headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
        },
    })
    .then((response) =>{
    console.log(response);
    return response.json();
    })
    .then((datos) => {
        console.log(datos);
    });
}

getBeers();