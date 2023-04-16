const quantityControl = document.querySelectorAll(".product__quantity-control");

const quantityValue = document.querySelectorAll(".product__quantity-value");

const product = document.querySelector('.product>.product__quantity-value');

let cart = {
  'data-id 1': 1,
  'data-id 2': 1,
  'data-id 3': 1,
  'data-id 4': 1
}


document.onclick = e => {
  let parent = e.target.closest('.product');
  if (e.target.classList.contains('product__quantity-control_dec')) {
    console.log(parent.dataset.id)
    // decreaseValue(e.target.dataset.id);
  }

  if (e.target.classList.contains('product__quantity-control_inc')) {
    console.log(parent.dataset.id)
    // increaseValue(e.target.dataset.id);
  }
}

// const decreaseValue = id => {
  
//   cart[id]--;
//   renderCart()
// }

// const increaseValue = id => {
 
//   cart[id]++;
//   renderCart()
// }

const renderCart = () => {
  console.log(cart)
}
renderCart()
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