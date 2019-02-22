import api from './api';

const { createQuote } = api();

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');


const quoteTemplate = (comment) => `
  <div class="list-item">
    <p>${comment}</p>
  </div>
`;

quoteInput.addEventListener('change', (evt) => {
  quoteInput.value = evt.target.value;
});

quoteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  try {
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    console.log('id: ', id)
    const quote = await createQuote(id, quoteInput.value);
    // const beer = await getBeer(id);
    document.getElementById('quoteList').innerHTML = quoteTemplate(quoteInput.value);
  } catch (e) {
    console.error(e);
  }

});
