
import striptags from 'striptags';
import { openHeader } from './ui';
import api from './api';

const { getBeers } = api();

const LIMIT_BEERS = 10;


const templateBeer = ({ beerId, name, image, description, principal, likes, price, firstBrewed }) => `
    <div id="${beerId}" class="card ${principal ? 'principal' : 'secondary close'}">
        <header class="card-header">
        <a href="/detail.html?id=${beerId}">
          <h2 class="font-effect-crackle">${name}</h2>
        </a>
        </header>
        <div class="card-content">
          <div class="card-content-image">
          <a href="/detail.html?id=${beerId}"> <img src="${image}"> </a>
          </div>
          <div class="card-content-text">
            <p>${striptags(description)}</p>
            <div class="rating-container">
              <button class="icon">
                <i class="fas fa-thumbs-up"> ${likes}</i>
              </button>
              <span class="sinceBrew">${firstBrewed}</span>
            </div>
          </div>
        </div>
    </div>
`;

const renderBeers = (element, beersToShow) => {
  const htmlBeers = beersToShow.map((beer, index) => {
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
  console.log(query)
  try {
    const objectBeers = await getBeers(query, LIMIT_BEERS); 

    console.log(objectBeers)

    const [dateFilterYear, dateFilterMonth] = document.getElementById('dateInput').value.split('-');
    const beersFiltered = objectBeers.beers.filter(beer => {
      const [dateBeerMonth, dateBeerYear] = beer.firstBrewed.split('/');
      return ( (dateFilterYear < dateBeerYear) ||
        ((dateFilterYear == dateBeerYear) && (dateFilterMonth <= dateBeerMonth)));
        
    });

    const beerSection = document.getElementById('beer-section');
    renderBeers(beerSection, beersFiltered);
  } catch (e) {
    console.error(e);
  }
};


export {
  renderDOMBeers,
};

renderDOMBeers(' ');