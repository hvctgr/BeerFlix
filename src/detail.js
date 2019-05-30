import './styles/detail.scss';
import api from './js/api';
import './js/quoteForm';
import { likePlus } from './js/likesPlus';

const { getBeersDetail } = api();

const detailTemplate = ({ beerId, name, description, image, likes, price, brewersTips, firstBrewed}) => `
<header id="${beerId}">
    <div class="title-section">
        <h1>${name}</h1>
    </div>
    <div class="image-container">
        <img src="${ image}"
    </div>
    <div class="content">
        <span class="description">
            <p>${description}</p>
        </span>
        <span class="brewersTips">
            <p><span class="label">Brewer Tips</span>: ${brewersTips}</p>
        </span>
        <span class="price">
            <p><span class="label">Price</span>: ${price} $</p>
        </span>
        <span class="firstBrewed">
            <p><span class="label">First Brewed</span>: ${firstBrewed}</p>
        </span>
        <div class="likes">
            <button class="icon">
                <i class="fas fa-thumbs-up"> ${likes}</i>
            </button>
        </div>
    </div>
    
</div>

</header>
`;

const commentTemplate = ({ comment }) => `
<p>
    ${comment}
</p>
`;

const renderDetail = async () => {
    try {
        const [, id] = window.location.search ? window.location.search.split('=') : [];
        const beerObj = await getBeersDetail(id);

        const beerHTML = detailTemplate(beerObj.beer);
        document.getElementById('detail').innerHTML = beerHTML;
        likePlus(id);

        if (beerObj.beer.comment) {
            const commentHTML = beerObj.beer.comment.map( (comment) => commentTemplate(comment) ).join('');
            document.getElementById('quoteList').innerHTML = commentHTML;
        }

    } catch (e) {
        console.error(e);
    }
}

renderDetail();