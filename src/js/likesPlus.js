import api from './api';

const { plusOneLike } = api();
export const likePlus = (id) => {
  const likeIcon = document.querySelector(".likes .icon");

  const likeTemplate = (beerLikes) => `
  <i class="fas fa-thumbs-up"> ${beerLikes} </i>
  `

  likeIcon.addEventListener('click', async (evt) => {

    try {
      const quote = await plusOneLike(id);
      const numLikesPlusOne = Number(likeIcon.textContent.trim()) + 1;
      likeIcon.innerHTML = likeTemplate(numLikesPlusOne);

    } catch (e) {
      console.error(e);
    }

  });

}
