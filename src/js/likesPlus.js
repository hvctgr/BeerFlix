import api from './api';

const { plusOneLike } = api();
export const likePlus = (id) => {
  const likeIcon = document.querySelector(".likes .icon");

  const likeTemplate = (comment) => `
  <i class="fas fa-thumbs-up"> ${comment} </i>
  `

  likeIcon.addEventListener('click', async (evt) => {

    try {
      console.log("likes");
      const quote = await plusOneLike(id);

//textcontent cojo valor y hago trim
        //variableconlikes = document.querySelector(".likes .icon").textContent.trim()
//con inner lo pongo bonito
        //noseque = document.querySelector(".likes .icon").innerHTML.trim()
      
      //anterior
        //  commentPar.innerHTML = likeTemplate(variableconlikes);
      //  document.getElementById('quoteList').appendChild(commentPar);

    } catch (e) {
      console.error(e);
    }

  });

}
