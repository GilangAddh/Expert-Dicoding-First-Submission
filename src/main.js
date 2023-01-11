import DATA from './DATA.json'
import './styles/main.css'
import './styles/responsive.css'
console.log(DATA);

/*Nav */
document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('nav-list-block');
});


function getRestaurants(data) {
  let restoHTML = '';

  data.restaurants.forEach((resto, i) => {
    restoHTML += `
      <div tabindex="0" class="card">
        <div class="post-item-head">
          <img tabindex="0" class="card-image" alt="${resto.name} picture" src="${resto.pictureId}"/>
        </div>

        <div tabindex="0" class="post-item-content">
          <h3 class="post-item-title">${resto.name}</h3>
          <p class"post-item-info">
            <i class="bi bi-house"></i> ${resto.city} - <i class="bi bi-star-half "></i> ${resto.rating}
          </p>
          <p class="post-item-desc">${resto.description}</p>
        </div>
      </div>
      `;
  });

  // append to DOM
  document.getElementById('posts').innerHTML = restoHTML;
}

getRestaurants(DATA);