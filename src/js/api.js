
const API_KEY = '15PKA5T-XCV4K6J-GQ4ZAG0-Q4WX0MX';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
    const SEARCH_API_URL = `${API_URL}beers?search=`;
    const BEERS_URL = `${API_URL}beers`;
    const LIMIT_FILTER = `&limit=`
    return {
        getBeers: async (query, limit) => {
            try {   
                const requestURL = query ? 
                `${SEARCH_API_URL}${query}${LIMIT_FILTER}${limit}` : 
                BEERS_URL;
                const response = await fetch(requestURL, {
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });

                const datos = await response.json();

                return datos;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        getBeersDetail: async (id) => {
            try {
                const response = await fetch(`${BEERS_URL}/${id}`, {
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });

                const beer = await response.json();

                return beer;
            } catch (e) {
                console.error(e);
            }
        },
        createQuote: async (id, text) => {
            try {
                const response = await fetch(`${BEERS_URL}/${id}/comment`, {
                    method: 'POST',
                    body: JSON.stringify({
                        comment: text,
                    }),
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });
                if(!response.ok) {
                    throw 'Error';
                }
                const quote = await response.json();
                return quote;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        plusOneLike: async (id) => {
            try {
                const response = await fetch(`${BEERS_URL}/${id}/like`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });
                if(!response.ok) {
                    throw 'Error';
                }
                const like = await response.json();
                return like;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
    };
};

export default api;