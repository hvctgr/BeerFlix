import api from './api';

const { plusOneLike } = api();

const likeIcon = document.querySelector(".likes .icon");

const likeTemplate = (comment) => `
    ${comment}
`;


likeIcon.addEventListener('click', async (evt) => {

  try {
      console.log("likes");
    const [, id] = window.location.search ? window.location.search.split('=') : [];
    const quote = await plusOneLike(id);
     
  //  commentPar.innerHTML = likeTemplate(quoteInput.value);
  //  document.getElementById('quoteList').appendChild(commentPar);
    
  } catch (e) {
    console.error(e);
  }

});
