// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotalPrice;
}

//   // ITERATION 2

//   function calculateAll () {
//     const allProducts = document.querySelectorAll('.product');
//     let total = 0
//     allProducts.forEach(eachProduct=> {
//      let subtotal = updateSubtotal(eachProduct);
//      total += subtotal
//     });
//     document.querySelector("#total-value span").innerHTML = total
// }

//   // ITERATION 3
//   //... done above

// // ITERATION 4

// function removeProduct(event) {
//   const target = document.querySelector('.btn.btn-remove');
//   target.addEventListener('click', removeButton);
// }

// const removeButton = () => {
//   document.querySelectorAll(".product").forEach(row => {
//     row.querySelector(".btn-remove").onclick = function(e) {
//       row.remove()
//     }
//   })
// };
// removeButton()
// // ITERATION 5

// function createProduct() {
//   document.querySelectorAll('#create').onclick = () => {
//       console.log(`create button clicked!`)
//     }
//   let newProduct = document.querySelectorAll('tfoot input')[0].value
//   let newProductPrice = document.querySelector('tfoot input')[1].value
//   let newRow = `<tr class="product">
//                 <td class="name">
//                   <span>${newProduct}</span>
//                 </td>
//                 <td class="price">$<span>${newProductPrice}</span></td>
//                 <td class="quantity">
//                   <input type="number" value="0" min="0" placeholder="Quantity" />
//                 </td>
//                 <td class="subtotal">$<span>0</span></td>
//                 <td class="action">
//                   <button class="btn btn-remove">Remove</button>
//                 </td>
//                 </tr>`
//   document.querySelector('tbody').innerHTML += newRow
//   removeButton()
//   }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   removeButton()
// });

// 1. define quantity
// 2. define price
// 3. click on the button
// 4. update subtotal = quantity * price

// let price = document.querySelector(document.querySelector(

const calculatePriceBtn = document.querySelector("#calculate");
calculatePriceBtn.onclick = calculateAll;
function calculateAll() {
  let quantity = document.querySelector("td.quantity input").value;
  let price = document.querySelector("td.price span").innerHTML;
  let subtotal = document.querySelector("td.subtotal span");
  subtotal.innerHTML = price * quantity;
}
