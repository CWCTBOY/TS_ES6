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
        console.log(value);
        const exist: Obj[] = data.filter((item: Obj) => item.city.includes(value));
        console.log(exist);
      })
    };
  });