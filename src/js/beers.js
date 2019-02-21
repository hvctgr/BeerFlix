
import striptags from 'striptags';
import { openHeader } from './ui';
import api from './api';

const { getBeers } = api();


const templateBeer = ({ beerId, name, image, description, principal }) => `
    <div id="${beerId}" class="card ${principal ? 'principal' : 'secondary close'}">
        <header class="card-header">
          <h2>${name}</h2>
        </header>
        <div class="card-content">
          <div class="card-content-image">
            <img src="${image}">
          </div>
          <div class="card-content-text">
            <p>${striptags(description)}</p>
            <div class="rating-container">
              <button class="icon">
                <i class="fas fa-star"></i>
              </button>
              <button class="icon">
                <i class="far fa-star"></i>
              </button>
              <button class="icon">
                <i class="far fa-star"></i>
              </button>
            </div>
          </div>
        </div>
    </div>
`;

const renderBeers = (element, beersObject) => {
    console.log(beersObject);
    //cambiar el slice para añadir el limit
    const htmlBeers = beersObject.beers.slice(0,10).map((beer, index) => {
        if (index < 1) {
            return templateBeer({
                ...beer,
                principal: true,
            });
        }
        return templateBeer({ ...beer, principal: false });
    }).join('');
    element.innerHTML = htmlBeers;

    const headers = document.querySelectorAll('.card.secondary .card-header');
    headers.forEach((header) => {
        const id = header.parentNode.getAttribute('id');
        header.addEventListener('click', openHeader(id));
    });
};

const renderDOMBeers = async (query) => {
    try {
        const fetchBeers = await getBeers(query);
//limitar por fecha
        const beerSection = document.getElementById('beer-section');
        renderBeers(beerSection, fetchBeers);
    } catch (e) {
        console.error(e);
    }
};


export {
    renderDOMBeers,
};