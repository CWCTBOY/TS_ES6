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
    if (input instanceof HTMLInputElement) {
      input.addEventListener(`keydown`, function () {
        const value = this.value;
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].city)
        }
      })
    };
  });