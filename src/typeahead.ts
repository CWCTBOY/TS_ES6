interface Obj {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
  .then((pull: Response) => pull.json())
  .then((data: Obj[]): void => {
    const input = document.querySelector(`.search`);
    console.log(data);
    if (input instanceof HTMLInputElement) {
      input.addEventListener(`input`, function () {
        const value = this.value;
        const filtedObj: Obj[] = data.filter((item: Obj) => item.city.includes(value) || item.state.includes(value));
        console.log(filtedObj);//
        // filted word pulling Success
        const ul = document.querySelector(`.suggestions`);
        if (ul instanceof HTMLUListElement && value !== ``) {
          let listSet = ``;
          for (let i = 0; i < filtedObj.length; i++) {
            let city = filtedObj[i].city;
            let state = filtedObj[i].state;
            listSet += `<li class="city-state"><p class="city">${city}, </p><p class="state">${state}</p></li>`;
          }
          ul.innerHTML = listSet;
        } else if (ul instanceof HTMLUListElement && value === ``) {
          ul.innerHTML = ``;
        }
      })
    };
  });