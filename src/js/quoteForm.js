import api from './api';

const { createQuote } = api();

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');


const quoteTemplate = (comment) => `
    ${comment}
`;

quoteInput.addEventListener('change', (evt) => {
  quoteInput.value = evt.target.value;
});

quoteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  try {
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    const quote = await createQuote(id, quoteInput.value);
     
    const commentPar = document.createElement("p");
    commentPar.innerHTML = quoteTemplate(quoteInput.value);
    document.getElementById('quoteList').appendChild(commentPar);
    
  } catch (e) {
    console.error(e);
  }

});
