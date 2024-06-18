//Thêm dữ liệu cho phương thức vận chuyển Giao tận nơi
document.addEventListener('DOMContentLoaded', () => {
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');
  
    const districts = [
      { value: 'q1', text: 'Đống Đa' },
      { value: 'q2', text: 'Cầu Giấy' },
      { value: 'q3', text: 'Thanh Xuân' },
      { value: 'q4', text: 'Ba Đình' },
      { value: 'q5', text: 'Hà Đông' },
      { value: 'q6', text: 'Tây Hồ' },
      { value: 'q7', text: 'Hoàn Kiếm' },
      { value: 'q8', text: 'Hai Bà Trưng' },
      { value: 'q9', text: 'Hoàng Mai' },
      { value: 'q10', text: 'Long Biên' },
      { value: 'q11', text: 'Nam Từ Liêm' },
      { value: 'q12', text: 'Bắc Từ Liêm' },
    ];
  
    const wards = {
      q1: ['Phường Cát Linh', 'Phường Văn Miếu', 'Phường Quốc Tử Giám', 'Phường Láng Thượng', 'Phường Ô Chợ Dừa', 'Phường Văn Chương', 'Phường Hàng Bột', 'Phường Láng Hạ', 'Phường Khâm Thiên', 'Phường Thổ Quan', 'Phường Nam Đồng', 'Phường Trung Phụng', 'Phường Quang Trung', 'Phường Trung Liệt', 'Phường Phương Liên', 'Phường Thịnh Quang', 'Phường Trung Tự', 'Phường Kim Liên', 'Phường Phương Mai', 'Phường Ngã Tư Sở', 'Phường Khương Thượng'],
      q2: ['Phường Nghĩa Đô', 'Phường Nghĩa Tân', 'Phường Mai Dịch', 'Phường Dịch Vọng', 'Phường Dịch Vọng Hậu', 'Phường Quan Hoa', 'Phường Yên Hòa', 'Phường Trung Hòa'],
      q3: ['Phường Nhân Chính', 'Phường Thượng Đình', 'Phường Khương Trung', 'Phường Khương Mai', 'Phường Thanh Xuân', 'Phường Phương Liệt', 'Phường Hạ Đình', 'Phường Khương Đình', 'Phường Bắc Thanh Xuân', 'Phường Nam Thanh Xuân', 'Phường Kim Giang'],
      q4: ['Phường Quán Thánh', 'Phường Ngọc Hà', 'Phường Điện Biên', 'Phường Đội Cấn', 'Phường Ngọc Khánh', 'Phường Kim Mã', 'Phường Giảng Võ', 'Phường Thành Công', 'Phường Phúc Xá', 'Phường Trúc Bạch', 'Phường Vĩnh Phúc', 'Phường Cống Vị', 'Phường Liễu Giai', 'Phường Nguyễn Trung Trực'],
      q5: ['Phường Nguyễn Trãi', 'Phường Mộ Lao', 'Phường Văn Quán', 'Phường Vạn Phúc', 'Phường Yết Kiêu', 'Phường Quang Trung', 'Phường La Khê', 'Phường Phú La', 'Phường Hà Cầu', 'Phường Yên Nghĩa', 'Phường Kiến Hưng', 'Phường Phú Lãm', 'Phường Phú Lương', 'Phường Dương Nội', 'Phường Đồng Mai', 'Phường Biên Giang'],
      q6: ['Phường Phú Thượng', 'Phường Nhật Tân', 'Phường Tứ Liên', 'Phường Quảng An', 'Phường Xuân La', 'Phường Yên Phụ', 'Phường Bưởi', 'Phường Thụy Khuê'],
      q7: ['Phường Phúc Tân', 'Phường Đồng Xuân', 'Phường Hàng Mã', 'Phường Hàng Buồm', 'Phường Hàng Đào', 'Phường Hàng Bồ', 'Phường Cửa Đông', 'Phường Lý Thái Tổ', 'Phường Hàng Bạc', 'Phường Hàng Gai', 'Phường Chương Dương', 'Phường Hàng Trống', 'Phường Cửa Nam', 'Phường Hàng Bông', 'Phường Tràng Tiền', 'Phường Trần Hưng Đạo', 'Phường Phan Chu Trinh', 'Phường Hàng Bài'],
      q8: ['Phường Nguyễn Du', 'Phường Bạch Đằng', 'Phường Phạm Đình Hổ', 'Phường Lê Đại Hành', 'Phường Đồng Nhân', 'Phường Phố Huế', 'Phường Đống Mác', 'Phường Thanh Lương', 'Phường Thanh Nhàn', 'Phường Cầu Dền', 'Phường Bách Khoa', 'Phường Đồng Tâm', 'Phường Vĩnh Tuy', 'Phường Bạch Mai', 'Phường Quỳnh Mai', 'Phường Quỳnh Lôi', 'Phường Minh Khai', 'Phường Trương Định'],
      q9: ['Phường Thanh Trì', 'Phường Vĩnh Hưng', 'Phường Định Công', 'Phường Mai Động', 'Phường Tương Mai', 'Phường Đại Kim', 'Phường Tân Mai', 'Phường Hoàng Văn Thụ', 'Phường Giáp Bát', 'Phường Lĩnh Nam', 'Phường Thịnh Liệt', 'Phường Trần Phú', 'Phường Hoàng Liệt', 'Phường Yên Sở'],
      q10: ['Phường Thượng Thanh', 'Phường Ngọc Thụy', 'Phường Giang Biên', 'Phường Đức Giang', 'Phường Việt Hưng', 'Phường Gia Thụy', 'Phường Ngọc Lâm', 'Phường Phúc Lợi', 'Phường Bồ Đề', 'Phường Sài Đồng', 'Phường Long Biên', 'Phường Thạch Bàn', 'Phường Phúc Đồng', 'Phường Cự Khối'],
      q11: ['Phường Cầu Diễn', 'Phường Xuân Phương', 'Phường Phương Canh', 'Phường Mỹ Đình 1', 'Phường Mỹ Đình 2', 'Phường Tây Mỗ', 'Phường Mễ Trì', 'Phường Phú Đô', 'Phường Đại Mỗ', 'Phường Trung Văn'],
      q12: ['Phường Thượng Cát', 'Phường Liên Mạc', 'Phường Đông Ngạc', 'Phường Đức Thắng', 'Phường Thụy Phương', 'Phường Tây Tựu', 'Phường Xuân Đỉnh', 'Phường Xuân Tảo', 'Phường Minh Khai', 'Phường Cổ Nhuế 1', 'Phường Cổ Nhuế 2', 'Phường Phú Diễn', 'Phường Phúc Diễn']
    };
  
    // Thêm các tùy chọn vào thẻ <select> cho quận/huyện
    districts.forEach(district => {
      const option = document.createElement('option');
      option.value = district.value;
      option.textContent = district.text;
      districtSelect.appendChild(option);
    }); 
    // Xử lý khi thay đổi quận/huyện
    districtSelect.addEventListener('change', function() {
      const selectedOption = districtSelect.options[districtSelect.selectedIndex];
      const districtValue = selectedOption.value;
  
      // Xóa các tùy chọn phường/xã hiện tại
      wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
  
      if (districtValue) {
        // Thêm các tùy chọn phường/xã mới
        wards[districtValue].forEach(ward => {
          const option = document.createElement('option');
          option.value = ward;
          option.textContent = ward;
          wardSelect.appendChild(option);
        });
  
        selectedDistrict.textContent = selectedOption.text;
        selectedDistrict.style.display = 'block';
      } else {
        selectedDistrict.style.display = 'none';
      }
    });
  
    // Xử lý khi thay đổi phường/xã
    wardSelect.addEventListener('change', function() {
      const selectedOption = wardSelect.options[wardSelect.selectedIndex];
      if (selectedOption.value) {
        selectedWard.textContent = selectedOption.text;
        selectedWard.style.display = 'block';
      } else {
        selectedWard.style.display = 'none';
      }
    });
  });

// Xử lý các sự kiện của trang thanh toán
document.addEventListener('DOMContentLoaded', () => {
    const deliveryRadio = document.getElementById('delivery');
    const deliveryDetails = document.getElementById('delivery_details');
    const pickupRadio = document.getElementById('pickup');
    const storeAddress = document.getElementById('store-address');
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');
    const paymentPopup = document.getElementById('payment-popup');
    const closeBtn = document.querySelector('.close');

    // Thiết lập mặc định là "Nhận tại cửa hàng"
    pickupRadio.checked = true;
    storeAddress.style.display = 'block';
    deliveryDetails.style.display = 'none';
    let shippingFee = 0; // Phí vận chuyển mặc định là 0

    // Xử lý khi thay đổi phương thức vận chuyển
    pickupRadio.addEventListener('change', () => {
        if (pickupRadio.checked) {
            storeAddress.style.display = 'block';
            deliveryDetails.style.display = 'none';
            shippingFee = 0;
            updateTotalPrice();
        }
    });

    deliveryRadio.addEventListener('change', () => {
        if (deliveryRadio.checked) {
            storeAddress.style.display = 'none';
            deliveryDetails.style.display = 'block';
            handleAddressChange(); // Kiểm tra xem quận/huyện và phường/xã đã được chọn chưa
        }
    });

    // Xử lý khi thay đổi quận/huyện hoặc phường/xã
    function handleAddressChange() {
        const selectedDistrict = districtSelect.value;
        const selectedWard = wardSelect.value;
        if (deliveryRadio.checked && selectedDistrict && selectedWard) {
            shippingFee = 20000;
        } else {
            shippingFee = 0;
        }
        updateTotalPrice();
    }

    districtSelect.addEventListener('change', handleAddressChange);
    wardSelect.addEventListener('change', handleAddressChange);

    // Xử lý tổng giá
    let subtotal = 0;
    let discountAmount = 0;

    const cart = JSON.parse(localStorage.getItem('cart'));
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

        subtotal = totalPrice;
        document.getElementById('total-quantity').textContent = totalQuantity;
        document.getElementById('subtotal').textContent = subtotal.toLocaleString();
        document.getElementById('discount-amount').textContent = discountAmount.toLocaleString();
        document.getElementById('total-price').textContent = (subtotal + shippingFee - discountAmount).toLocaleString();
        document.getElementById('shipping-fee').textContent = shippingFee.toLocaleString();
    }

    document.getElementById('apply-coupon').addEventListener('click', () => {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode === 'DISCOUNT10') {
            const discount = 0.1;
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

    // Xử lý khi thay đổi phương thức thanh toán
    const codRadio = document.getElementById('cod');
    const bankTransferRadio = document.getElementById('bank_transfer');
    const bankAccountInfo = document.getElementById('bank-account-info');

    codRadio.checked = true;
    bankAccountInfo.style.display = 'none';

    codRadio.addEventListener('change', () => {
        if (codRadio.checked) {
            bankAccountInfo.style.display = 'none';
        }
    });

    bankTransferRadio.addEventListener('change', () => {
        if (bankTransferRadio.checked) {
            bankAccountInfo.style.display = 'block';
        }
    });

    document.getElementById('back-to-cart').addEventListener('click', () => {
        window.location.href = 'giohang.html';
    });

    // Xử lý khi nhấn nút thanh toán
    document.getElementById('submit-checkout').addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn chặn form gửi đi
    
        const fullName = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        let deliveryAddress = '';
        const shippingMethod = pickupRadio.checked ? 'Nhận tại cửa hàng' : 'Giao tận nơi';
        const paymentMethod = codRadio.checked ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng';
        const totalPrice = document.getElementById('total-price').textContent;
        const subtotal = document.getElementById('subtotal').textContent;
        const shippingFee = document.getElementById('shipping-fee').textContent;
        const discountAmount = document.getElementById('discount-amount').textContent;
    
        if (pickupRadio.checked) {
            deliveryAddress = storeAddress.value;
        } else {
            const selectedWard = wardSelect.options[wardSelect.selectedIndex].text;
            const selectedDistrict = districtSelect.options[districtSelect.selectedIndex].text;
            deliveryAddress = `${document.getElementById('address').value}, ${selectedWard}, ${selectedDistrict}, Hà Nội`;
        }
    
        // Điền thông tin vào popup
        document.getElementById('popup-fullname').textContent = fullName;
        document.getElementById('popup-email').textContent = email;
        document.getElementById('popup-phone').textContent = phone;
        document.getElementById('popup-shipping-method').textContent = shippingMethod;
        document.getElementById('popup-delivery-address').querySelector('span').textContent = deliveryAddress;
        document.getElementById('popup-payment-method').textContent = paymentMethod;
        document.getElementById('popup-subtotal').textContent = subtotal;
        document.getElementById('popup-shipping-fee').textContent = shippingFee;
        document.getElementById('popup-discount-amount').textContent = discountAmount;
        document.getElementById('popup-total-price').textContent = totalPrice;

        // Lấy danh sách sản phẩm từ trang thanh toán và hiển thị trong popup
        const popupProductList = document.getElementById('popup-product-list');
        popupProductList.innerHTML = ''; // Xóa nội dung cũ

        cart.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" width="50"></td>
                <td><span class="product-quantity">${product.quantity}x</span> <span class="product-name">${product.name}</span></td>
                <td>${product.price.toLocaleString()} VNĐ</td>
            `;
            popupProductList.appendChild(row);
        });

        // Hiển thị tạm tính, phí vận chuyển và giảm giá
        document.getElementById('popup-subtotal').textContent = subtotal.toLocaleString();
        document.getElementById('popup-shipping-fee').textContent = shippingFee.toLocaleString();
        document.getElementById('popup-discount-amount').textContent = discountAmount.toLocaleString();

        // Hiển thị popup
        paymentPopup.style.display = 'block';
    });

    // Đóng popup
    closeBtn.addEventListener('click', () => {
        paymentPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === paymentPopup) {
            paymentPopup.style.display = 'none';
        }
    });
});

//Xử lý notes
document.addEventListener('DOMContentLoaded', () => {
    const bankTransferRadio = document.getElementById('bank_transfer');
    const codRadio = document.getElementById('cod');
    const bankAccountInfo = document.getElementById('bank-account-info');
    const notesContainer = document.getElementById('notes-container');

    codRadio.checked = true;
    bankAccountInfo.style.display = 'none';
    notesContainer.style.display = 'none';

    codRadio.addEventListener('change', () => {
        if (codRadio.checked) {
            bankAccountInfo.style.display = 'none';
            notesContainer.style.display = 'none';
        }
    });

    bankTransferRadio.addEventListener('change', () => {
        if (bankTransferRadio.checked) {
            bankAccountInfo.style.display = 'block';
            notesContainer.style.display = 'block';
        }
    });
});