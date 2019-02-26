import './styles/detail.scss';
import api from './js/api';
import './js/quoteForm'

const { getBeersDetail } = api();

const detailTemplate = ({ beerId, name, description, image, likes }) => `
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
    <div class="likes">
    likes: ${likes}
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

        const commentHTML = beerObj.beer.comment.map( (comment) => {
            console.log(comment);
            return commentTemplate(comment);
        }).join('');
        document.getElementById('quoteList').innerHTML = commentHTML;

    } catch (e) {
        console.error(e);
    }
}

renderDetail();