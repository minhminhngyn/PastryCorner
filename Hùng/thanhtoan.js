const deliveryRadio = document.getElementById('delivery');
    const deliveryDetails = document.getElementById('delivery_details');
    
    deliveryRadio.addEventListener('change', function() {
      if (this.checked) {
        deliveryDetails.style.display = 'block';
      } else {
        deliveryDetails.style.display = 'none';
      }
    });

  //Chọn nút Quay lại thì quay lại giỏ hàng
  document.getElementById('back-to-cart').addEventListener('click', () => {
    window.location.href = 'giohang.html'; 
});

//Lấy thông tin từ trang giỏ hàng và hiển thị thông tin
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart'));

  let subtotal = 0;
  let discountAmount = 0;
  let shippingFee = 0;

  if (cart && cart.length > 0) {
      const productList = document.getElementById('product-list');
      let totalPrice = 0;
      let totalQuantity = 0;

      cart.forEach(product => {
          const itemTotalPrice = product.price * product.quantity;
          totalPrice += itemTotalPrice;
          totalQuantity += product.quantity;

          const productDiv = document.createElement('div');
          productDiv.classList.add('product');
          productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <p>${product.price.toLocaleString()} VNĐ x ${product.quantity}</p>
              </div>
          `;
          productList.appendChild(productDiv);
      });

      subtotal = totalPrice; // Tạm tính (tổng tiền trước giảm giá)
      document.getElementById('total-quantity').textContent = totalQuantity;
      document.getElementById('subtotal').textContent = subtotal.toLocaleString();
      document.getElementById('discount-amount').textContent = discountAmount.toLocaleString();
      document.getElementById('total-price').textContent = '0'; // Tổng tiền phải trả ban đầu là 0
      document.getElementById('shipping-fee').textContent = '0'; // Phí vận chuyển ban đầu là 0
  }

  document.querySelectorAll('input[name="delivery_method"]').forEach((elem) => {
      elem.addEventListener('change', () => {
          const deliveryMethod = document.querySelector('input[name="delivery_method"]:checked').value;
          shippingFee = deliveryMethod === 'delivery' ? 20000 : 0;
          updateTotalPrice();
      });
  });

  document.getElementById('apply-coupon').addEventListener('click', () => {
      const couponCode = document.getElementById('coupon-code').value;
      
      if (couponCode === 'DISCOUNT10') {
          const discount = 0.1; // Giảm 10%
          discountAmount = subtotal * discount;
          updateTotalPrice();
          alert('Mã giảm giá hợp lệ! Bạn được giảm 10% tổng giá trị đơn hàng.');
      } else {
          alert('Mã giảm giá không hợp lệ!');
      }
  });

  function updateTotalPrice() {
      const totalPrice = subtotal - discountAmount + shippingFee;
      document.getElementById('discount-amount').textContent = discountAmount.toLocaleString();
      document.getElementById('shipping-fee').textContent = shippingFee.toLocaleString();
      document.getElementById('total-price').textContent = totalPrice.toLocaleString();
  }
  function togglePickupAddress(deliveryMethod) {
    const pickupAddress = document.getElementById('pickup-address');
    if (deliveryMethod === 'pickup') {
        pickupAddress.style.display = 'block';
    } else {
        pickupAddress.style.display = 'none';
    }
}
  document.getElementById('back-to-cart').addEventListener('click', () => {
      window.location.href = 'giohang.html';
  });
});



