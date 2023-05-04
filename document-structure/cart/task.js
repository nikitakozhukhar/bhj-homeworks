// const quantityControl = document.querySelectorAll(".product__quantity-control");
// const quantityValue = document.querySelector(".product__quantity-value");
const productValue = [...document.querySelectorAll('.product__quantity-value')];
const productAdd = document.querySelectorAll('.product__add');

const decreaseBtn = document.querySelectorAll('.product__quantity-control_dec');
const increaseBtn = document.querySelectorAll('.product__quantity-control_inc');


// const productTest = [...document.querySelectorAll('.product')];
// console.log(productTest.find(item => item.dataset.id === '1'))

// console.log(productTest.dataset.id === '1')

const decreaseValue = e => {
  e.target.nextElementSibling.textContent--;
  if (e.target.nextElementSibling.textContent <= 1) {
    e.target.nextElementSibling.textContent = 1;
  }
}

const increaseValue = e => {
  e.target.previousElementSibling.textContent++;
}

const product = document.querySelectorAll('.product')

decreaseBtn.forEach(item => {
  item.addEventListener('click', e => {
    decreaseValue(e);
  });
})

increaseBtn.forEach(item => {
  item.addEventListener('click', e => {
    increaseValue(e);
  })
})

productAdd.forEach(item => {
  item.addEventListener('click', e => {
    const parent = e.target.closest('.product');
    const imgSrc = e.target.closest('.product__controls').previousElementSibling.src;
    const value = e.target.previousElementSibling.children[1].textContent;


    let cartProducts = document.querySelector('.cart__products');

    const currentProductId = e.target.closest('.product').dataset.id;
    // console.log(cartCount)
    // const carts = document.querySelectorAll('.cart__products');

    const productCartsArr = [...document.querySelectorAll('.cart__product')];

    const productInCard = productCartsArr.find(item => item.dataset.id === currentProductId);

    if (productInCard) {
      let cart = document.querySelector(`.cart__product[data-id="${currentProductId}"]`);
      cart.children[1].textContent = +cart.textContent + (+value);
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.setAttribute('data-id', parent.dataset.id);
      cartProduct.innerHTML = `
          <img class="cart__product-image" src="${imgSrc}">
          <div class="cart__product-count">${value}</div>
    `

      cartProducts.append(cartProduct);
    }
  })

})