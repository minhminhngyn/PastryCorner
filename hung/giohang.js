const products = [
  {
      id: 1,
      name: 'Bánh Sô-cô-la',
      price: 25000,
      quantity: 1,
      image: 'https://via.placeholder.com/80'
  },
  {
      id: 2,
      name: 'Bánh Kem Dâu',
      price: 30000,
      quantity: 1,
      image: 'https://via.placeholder.com/80'
  },
  {
    id: 3,
    name: 'Bánh Mỳ Bò',
    price: 20000,
    quantity: 1,
    image: 'https://via.placeholder.com/80'
},
{
  id: 4,
  name: 'Bánh Kem Dừa',
  price: 25000,
  quantity: 1,
  image: 'https://via.placeholder.com/80'
}
];

function displayCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  let totalPrice = 0;
  let totalQuantity = 0;

  products.forEach(product => {
      const itemTotalPrice = product.price * product.quantity;
      totalPrice += itemTotalPrice;
      totalQuantity += product.quantity;

      const listItem = document.createElement('li');
      listItem.classList.add('cart-item');
      listItem.innerHTML = `
          <div class="item-info">
              <h3>${product.name}</h3>
              <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
              <div class="quantity">
                  <button class="minus-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                  <input type="number" min="1" value="${product.quantity}" onchange="updateQuantityFromInput(${product.id}, this.value)">
                  <button class="plus-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
              </div>
          </div>
          <img src="${product.image}" alt="${product.name}">
      `;
      cartList.appendChild(listItem);
  });

  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-price').textContent = totalPrice.toLocaleString();
}

function updateQuantity(productId, changeAmount) {
  const product = products.find(p => p.id === productId);
  if (product) {
      product.quantity += changeAmount;
      if (product.quantity < 1) {
          product.quantity = 1;
      }
      displayCart();
  }
}

function updateQuantityFromInput(productId, newQuantity) {
  const product = products.find(p => p.id === productId);
  if (product) {
      const quantity = parseInt(newQuantity, 10);
      if (!isNaN(quantity) && quantity > 0) {
          product.quantity = quantity;
      } else {
          product.quantity = 1;
      }
      displayCart();
  }
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  localStorage.setItem('cart', JSON.stringify(products));
  window.location.href = 'checkout.html';
});

displayCart();


  //Chọn nút thanh toán thì chuyển hướng sang Trang Thanh toán
  document.getElementById("checkout-btn").addEventListener("click", function() {
    window.location.href = "thanhtoan.html";
});