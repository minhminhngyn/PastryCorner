// Lấy popup và phần tử đóng
var popup = document.getElementById("myPopup");
var span = document.getElementsByClassName("close")[0];

// Hiển thị popup khi trang tải
window.onload = function() {
    popup.style.display = "flex";
}

// Đóng popup khi nhấn vào biểu tượng đóng (x)
span.onclick = function() {
    popup.style.display = "none";
}

// Đóng popup khi nhấp ra ngoài popup
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Hàm sao chép mã khuyến mãi
function copyPromoCode() {
    const promoCode = "CUOITHANG6";
    navigator.clipboard.writeText(promoCode).then(() => {
        alert("Mã khuyến mãi đã được sao chép: " + promoCode);
    }).catch(err => {
        console.log('Something went wrong', err);
    });
}
