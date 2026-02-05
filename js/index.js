// slå dig løs her...

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach((service) => console.log(service.headline));

const heroDOM = document.querySelector(".hero");

const imgSrc = hero.image;

const imgString = /*html*/ `<img src="${imgSrc}">`;

const heroContentString =
  /*html*/
  `
    <figure>
            <img src="${hero.image}" alt="">
            <figcaption>
                    <h2>${hero.headline}</h2>
                    <p>${hero.copy}</p>
                    <button><img src=${hero.icon}>Explore</button>
            </figcaption>
    </figure>

`;

const servicesContentString =
  /*html*/
  `
    <img src="${}" alt="" />
          <h2>${}</h2>
          <p>${}</p>
          <p>${}</p>

          <img src="${}" alt="" />
          <h2>${}</h2>
          <p>${}</p>
          <p>${}</p>

          <img src="${}" alt="" />
          <h2>${}</h2>
          <p>${}</p>
          <p>${}</p>
`;

heroDOM.insertAdjacentHTML("afterbegin", imgString);
console.log(heroContentString);
