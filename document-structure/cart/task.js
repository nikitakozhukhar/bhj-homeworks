const quantityControl = document.querySelectorAll(".product__quantity-control");

const quantityValue = document.querySelector(".product__quantity-value");

// const productValue = document.querySelector('.product__quantity-value');


const product = document.querySelectorAll('.product')

document.onclick = e => {
  const parent = e.target.closest('.product');

  const imgSrc = e.target.closest('.product__controls').previousElementSibling.src;
  
  const productValue = e.target.closest('.product__quantity-value')
  console.log(productValue)
  

  let cartProducts = document.querySelector('.cart__products');
  
  if (e.target.classList.contains('product__quantity-control_dec')) {
    decreaseValue(e);
  }

  if (e.target.classList.contains('product__quantity-control_inc')) {
    increaseValue(e);
    // console.log(image)
  }

    if (e.target.classList.contains('product__add')) {
      //создаем элемент карточки товара для корзины
      // createCartProduct(e);
      const cartProduct = document.createElement('div');
      
		  cartProduct.className = 'cart__product';
      cartProduct.setAttribute('data-id', parent.dataset.id);
      cartProducts.appendChild(cartProduct);

      //Создаем тег для картинки товара
      const cartProductImage = document.createElement('img');
      cartProductImage.src = imgSrc;
      cartProductImage.className ='cart__product-image';
      cartProduct.appendChild(cartProductImage);

      //создаем счетчик добавленного товара
      const cartProductCount = document.createElement('div');
      cartProductCount.className ='cart__product-count';
      cartProductCount.textContent = productValue;
      cartProduct.appendChild(cartProductCount);
      
  }
  
  

}

const decreaseValue = e => {
  e.target.nextElementSibling.textContent--;
  if (e.target.nextElementSibling.textContent <= 1) {
    e.target.nextElementSibling.textContent = 1;
  }
}

const increaseValue = e => {
  e.target.previousElementSibling.textContent++;
}

// const createCartProduct = e => {
//   const parent = e.target.closest('.product');
//   let cartProducts = document.querySelector('.cart__products');
//   const cartProduct = document.createElement('div');
      
// 		  cartProduct.className = 'cart__product';
//       cartProduct.setAttribute('data-id', parent.dataset.id);
//       cartProducts.appendChild(cartProduct);
// }




// const decreaseValue = id => {
  
//   cart[id]--;
//   renderCart()
// }

// const increaseValue = id => {
 
//   cart[id]++;
  
//   renderCart()
// }

// const renderCart = () => {
//   console.log(cart)
// }
// renderCart()
/*
if (e.target.classList.contains('product__quantity-control_dec')) {
  quantityValue.forEach(value => {
    if (value.textContent <= 0) {
      return
    }
    value.textContent--;
    
  })
} 
if (e.target.classList.contains('product__quantity-control_inc')) {
  quantityValue.forEach(value => value.textContent++)
}
*/









// quantityControl.forEach(control => control.addEventListener('click', e => {
//   let parent = e.target.closest('.product');
//   console.log(parent.dataset)
//   if (e.target.classList.contains('product__quantity-control_dec')) {
//     quantityValue.forEach(value => {
//       if (value.textContent <= 0) {
//         return
//       }
//       value.textContent--;
      
//     })
//   } 
//   if (e.target.classList.contains('product__quantity-control_inc')) {
//     quantityValue.forEach(value => value.textContent++)
//   }
// }))