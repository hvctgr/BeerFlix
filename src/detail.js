import './styles/detail.scss';
import api from './js/api';
import './js/quoteForm'

const { getBeersDetail } = api();

const detailTemplate = ({ beerId, name, description, image }) => `
<header id="${beerId}">
    <div class="title-section">
        <h1>${name}</h1>
    </div>
    <div class="image-container">
        <img src="${ image }"
    </div>
    <div class="content">
        ${description}
    </div>
</header>
`; 

const renderDetail = async () => {
    try {
        const [, id] = window.location.search ? window.location.search.split('=') : [];
        const beerObj = await getBeersDetail(id);
        console.log(beerObj);
        const beerHTML = detailTemplate(beerObj.beer);
        document.getElementById('detail').innerHTML = beerHTML;

    } catch (e) {
        console.error(e);
    }
}

renderDetail();
console.log('cargo detail!!!!!!!!!');