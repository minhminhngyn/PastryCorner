// Dữ liệu mẫu cho lịch sử mua hàng
const orders = [
    { order: '12345', date: '2024-06-01', value: '1,000,000 VND', paymentStatus: 'Đã thanh toán', deliveryStatus: 'Đã giao' },
    { order: '12346', date: '2024-06-05', value: '500,000 VND', paymentStatus: 'Chưa thanh toán', deliveryStatus: 'Đang giao' },
    { order: '12347', date: '2024-06-10', value: '1,200,000 VND', paymentStatus: 'Đã thanh toán', deliveryStatus: 'Đã giao' },
    { order: '12348', date: '2024-05-15', value: '2,000,000 VND', paymentStatus: 'Đã thanh toán', deliveryStatus: 'Đã giao' },
    { order: '12349', date: '2024-05-25', value: '800,000 VND', paymentStatus: 'Chưa thanh toán', deliveryStatus: 'Đang giao' },
    { order: '12350', date: '2024-04-20', value: '600,000 VND', paymentStatus: 'Đã thanh toán', deliveryStatus: 'Đã giao' },
    { order: '12351', date: '2024-04-30', value: '900,000 VND', paymentStatus: 'Chưa thanh toán', deliveryStatus: 'Đang giao' },
    { order: '12352', date: '2024-06-12', value: '3,000,000 VND', paymentStatus: 'Đã thanh toán', deliveryStatus: 'Đã giao' },
    { order: '12353', date: '2024-05-28', value: '700,000 VND', paymentStatus: 'Đã thanh toán', deliveryStatus: 'Đã giao' },
    { order: '12354', date: '2024-06-15', value: '1,500,000 VND', paymentStatus: 'Chưa thanh toán', deliveryStatus: 'Đang giao' }
  ];
  
  function renderOrders(filteredOrders) {
    const orderHistory = document.getElementById('order-history');
    orderHistory.innerHTML = '';
  
    if (filteredOrders.length === 0) {
      const noDataRow = document.createElement('tr');
      const noDataCell = document.createElement('td');
      noDataCell.colSpan = 5;
      noDataCell.className = 'no-data';
      noDataCell.innerText = 'Không có thông tin';
      noDataRow.appendChild(noDataCell);
      orderHistory.appendChild(noDataRow);
      return;
    }
  
    filteredOrders.forEach(order => {
      const row = document.createElement('tr');
      Object.values(order).forEach(value => {
        const cell = document.createElement('td');
        cell.innerText = value;
        row.appendChild(cell);
      });
      orderHistory.appendChild(row);
    });
  }
  
  function applyFilters() {
    const statusFilter = document.getElementById('status-filter').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
  
    const filteredOrders = orders.filter(order => {
      const orderDate = new Date(order.date);
      const isStatusMatch =
        statusFilter === 'all' ||
        (statusFilter === 'completed' && order.deliveryStatus === 'Đã giao') ||
        (statusFilter === 'in-progress' && order.deliveryStatus !== 'Đã giao');
  
      const isDateMatch =
        (!startDate || orderDate >= new Date(startDate)) &&
        (!endDate || orderDate <= new Date(endDate));
  
      return isStatusMatch && isDateMatch;
    });
  
    renderOrders(filteredOrders);
  }
  
  // Đặt giá trị mặc định cho bộ lọc
  document.addEventListener('DOMContentLoaded', () => {
    const statusFilter = document.getElementById('status-filter');
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(endDate.getMonth() - 1);
  
    document.getElementById('start-date').value = startDate.toISOString().split('T')[0];
    document.getElementById('end-date').value = endDate.toISOString().split('T')[0];
    statusFilter.value = 'in-progress';
  
    applyFilters();
     // Hiển thị thông báo chào
     const username = document.getElementById("username").textContent;
     document.getElementById("welcome-message").textContent = `Xin chào, ${username}!`;
   });

   //Chỉnh sửa thông tin
   function toggleEditMode(field) {
    const editMode = document.getElementById(`${field}-edit`);
    editMode.style.display = 'flex';

    const displayMode = document.getElementById(`${field}`);
    displayMode.style.display = 'none';

    // Ẩn icon chỉnh sửa
    const editIcon = document.querySelector(`#${field} .edit-icon`);
    editIcon.style.display = 'none';
  }

  function saveEditedInfo(field) {
    const newValue = document.getElementById(`new-${field}`).value;
    const displayMode = document.getElementById(`${field}`);
    displayMode.textContent = newValue;

    const editMode = document.getElementById(`${field}-edit`);
    editMode.style.display = 'none';
    displayMode.style.display = 'inline';

    // Hiện lại icon chỉnh sửa
    const editIcon = document.querySelector(`#${field} .edit-icon`);
    editIcon.style.display = 'inline';
  }
  
  //Lấy thông tin đơn hàng để cập nhật lên bảng Lịch sử mua hàng
  document.addEventListener('DOMContentLoaded', function() {
    // Lấy thông tin đơn hàng từ localStorage
    const order = JSON.parse(localStorage.getItem('latestOrder'));

    if (order) {
        // Tạo một hàng mới trong bảng thông tin đơn hàng
        const orderHistoryTable = document.getElementById('order-history');
        const newRow = orderHistoryTable.insertRow();

        const cellOrderNumber = newRow.insertCell(0);
        const cellOrderDate = newRow.insertCell(1);
        const cellTotalPrice = newRow.insertCell(2);
        const cellPaymentStatus = newRow.insertCell(3);
        const cellShippingStatus = newRow.insertCell(4);

        cellOrderNumber.textContent = order.invoiceNumber;
        cellOrderDate.textContent = order.orderDate;
        cellTotalPrice.textContent = order.totalPrice + 'VNĐ';
        cellPaymentStatus.textContent = order.paymentStatus;
        cellShippingStatus.textContent = order.shippingStatus;
    }
  });
