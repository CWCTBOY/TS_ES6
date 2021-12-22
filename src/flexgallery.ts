const panel = document.querySelectorAll(`.panel`);

panel.forEach(item => item.addEventListener(`mouseenter`, function (this: HTMLElement) {
  this.classList.add(`open`);
  this.addEventListener(`mouseleave`, function (this: HTMLElement) {
    this.classList.remove(`open`);
  });
}))