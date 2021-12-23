const panel = Array.from(document.querySelectorAll(`.panel`));
const centerText = Array.from(document.querySelectorAll(`.panel__centertext`));
// 장 펼치기, 흰색글씨 커지게하기
if (
  panel instanceof HTMLDivElement &&
  centerText instanceof HTMLSpanElement
)
  panel.forEach(item => item.addEventListener(`mouseenter`, function (this: HTMLElement) {
    this.classList.add(`open`);
    item.children[1].classList.add(`font-size`);
    this.addEventListener(`mouseleave`, function (this: HTMLElement) {
      this.classList.remove(`open`);
      item.children[1].classList.remove(`font-size`);
    });
  })); 