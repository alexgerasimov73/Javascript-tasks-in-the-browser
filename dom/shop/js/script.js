const buttons = document.getElementsByClassName('add');
const numberOfGoods = document.getElementById('cart-count');
const totalPrice = document.getElementById('cart-total-price');
let totalPriceNumericType = +totalPrice.innerText;

function additionOfGoods() {
  numberOfGoods.innerText = +numberOfGoods.innerText + 1;
  totalPriceNumericType += Number(this.dataset.price);
  totalPrice.innerText = getPriceFormatted(totalPriceNumericType);
}

for (button of buttons) {
  button.addEventListener('click', additionOfGoods);
}
 