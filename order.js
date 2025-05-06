$(document).ready(function () {
    if (localStorage.getItem("cart") == null) {
        var cart = {};
    } else {
      var cart = JSON.parse(localStorage.getItem("cart")) || {};
    }
    listcart(cart);
});
function listcart(cart) {
  let str_order=``;
  for (let item in cart) {
    str_order += `
    <div class="row">
      <div class="col">${cart[item].name}</div>
      <div class="col">x${cart[item].quantity}</div>
      <div class="col">= Rs.${(cart[item].price) * (cart[item].quantity)}</div>
    </div>`;
  }

  if(str_order == ``) str_order = `<h5 class='default'> Your Cart is Empty. Click here to Go to Menu </h5>`;
  document.getElementById("items").innerHTML= str_order;
}

function addOrder(event) {
  event.preventDefault();

  const item = document.getElementById('orderItem').value;
  const status = document.getElementById('orderStatus').value;
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputEmail').value;

  // Generate a new order ID
  const orderId = Date.now(); // Use timestamp as a unique order ID

  // Create the order object
  const order = {
      id: orderId,
      item: item,
      status: status,
      name: name,
      email: email
  };

  // Store the order in local storage
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Reset the form
  document.getElementById('orderForm').reset();

  // Show confirmation
  alert('Order confirmed! Your Order ID: ' + orderId);
}