//.................................hiện giỏ hàng.................................
icon=document.querySelector(".icons")
btncartopen=icon.querySelector(".icon-cart")

btncartopen.addEventListener('click',function(){
    document.querySelector(".cart").style.right="0";
    
})

//.................................ẩn giỏ hàng.................................
cartheader=document.querySelector(".cart-header")
btncartclose=cartheader.querySelector("#cart-close")

btncartclose.addEventListener('click',function(){
    document.querySelector(".cart").style.right='-100%';
    saveCart();
})
//.................................sự kiện kích hoạt khi click.................................
const btnaddcart=document.querySelectorAll('.add-to-cart')
btnaddcart.forEach(button => {
    button.addEventListener('click',function(event){
        var btn=event.target
        var productitem=btn.closest('.product-item')

        var price=productitem.querySelector('.product-price').textContent
        var name=productitem.querySelector('.product-name').textContent
        
        if(check(name)==true)
            {
                alert("Đã có sản phẩm trong giỏ hàng");
                return;
            }


        addtocart(name,price)//thêm sản phẩm vào giỏ hàng
        total()//tính tổng
        delproduct()//xóa sản phẩm khỏi giỏ hàng
        changeinput()//thay đổi số lượng
        //saveCart()
    })
});

//...........................................thêm vào giỏ hàng.....................................

function addtocart(productname,productprice){
    var tr=document.createElement('tr')

    var trcontent='<tr><td><span class="tl">'+productname+'</span></td>'+
    '<td><p class="product-price">'+productprice+'</p></td>'+
    '<td><input type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="del">Xóa</span></td>'
    tr.innerHTML=trcontent
    var tb=document.querySelector("tbody")
    tb.append(tr)

}
//.................................kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa.......................
function check(productname)
{
    var tb = document.querySelector("tbody");
    var rows = tb.querySelectorAll("tr");
    for (var i = 0; i < rows.length; i++) 
        {
            var row = rows[i];
            var existingProductName = row.querySelector(".tl").textContent;
            if (existingProductName === productname) 
            {
                return true;
            }
            
        }
    return false;
}
// ......................................tính tổng.............................................

function total(){
    var item=document.querySelectorAll('tbody tr')
    
    var total=0
    for(var i=0;i<item.length;i++){
        var quant=item[i].querySelector('input').value
        var price=item[i].querySelector('.product-price').textContent
        price=price.substring(0, price.length - 1)
        price=price.replace('.','')
        price=parseFloat(price)
        
        tt=quant*price
        total=total+tt
    }
    
    var totalformat
    if(total!=0)
            totalformat = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    else
            totalformat='0đ'
    var cost_total=document.querySelector('.cost-total span')
    cost_total.innerHTML=totalformat

    //sau khi tính tổng thì lấy var total để tính tiền thanh toán luôn. (tao không biết tách hai cái)
    const btn_apply=document.querySelector("#apply-promo")
    btn_apply.addEventListener("click",function()
    {
        const promoCode = document.getElementById('promo-code').value;
        var discount_apply=0
        for (let i = 0; i < promoCodes.length; i++) 
            {
            if (promoCode === promoCodes[i].value) 
                {
                    discount_apply = promoCodes[i].dis;
                    break;
                }
            }
        var cost_pay=addpromotion(total,discount_apply)
        var cost_pay_final=document.querySelector('.cost-final span')
        cost_pay_final.innerHTML=cost_pay
    })
    var promoSelect = document.getElementById('promo-code');
    promoSelect.addEventListener('change', function() 
    {
        calculateDiscountedTotal();
    });
}

// ......................................xóa sản phẩm.............................................
function delproduct(){
    var item=document.querySelectorAll('tbody tr')
    for( var i=0;i<item.length;i++)
        {
            var btnxoa = document.querySelectorAll(".del")
            btnxoa[i].addEventListener('click',function(event){
                var btn=event.target
                var tr_del=btn.parentElement.parentElement
                
                tr_del.remove()
                total()
                saveCart()
            })
        }
    
}

//.....................thay đổi input..........................................................
function changeinput(){
    var item=document.querySelectorAll('tbody tr')
    for( var i=0;i<item.length;i++){
        var inputvalue=item[i].querySelector("input")
        inputvalue.addEventListener("change",function(){
            total()
            saveCart()
        })
    }
}
// .................................hàm lưu giỏ hàng ....................................
function saveCart() {
    var cartData = [];
    var item = document.querySelectorAll('tbody tr');
    item.forEach(row => {
        var productname = row.querySelector(".tl").textContent;
        var productprice = row.querySelector('.product-price').textContent;
        var quantity = row.querySelector('input').value;
        cartData.push({ name: productname, price: productprice, quantity: quantity });
    });
    localStorage.setItem('cart', JSON.stringify(cartData));
}

// .........................Hàm tải dữ liệu giỏ hàng từ localStorage....................................
function loadCart() {
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData.forEach(product => {
        addtocart(product.name, product.price);
        var rows = document.querySelectorAll('tbody tr');
        rows[rows.length - 1].querySelector('input').value = product.quantity;
    });
    total();
    delproduct();
    changeinput();
}

// .....................Tải dữ liệu giỏ hàng khi trang được tải.................................
window.addEventListener('load', loadCart);



// ......................................KHUYẾN MẠI NHÉ................................
// ......................................đổ dữ liệu vào select box ................................


//cái này đang là ví dụ, nào merge bên khuyến mại
const promoCodes = 
[
    { value: 'SAVE10', text: 'SAVE10 - Giảm 10%',dis:0.1 },
    { value: 'tetthieunhi', text: 'Tết thiếu nhi- Giảm 15%',dis:0.15 },
    { value: 'DISCOUNT20', text: 'DISCOUNT20 - Giảm 20%',dis:0.2 }
];

function populatePromoCodes() 
{
    const select = document.getElementById('promo-code');
    promoCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code.value;
        option.text = code.text;
        select.append(option);
    });
}

// .....................gọi hàm đổ dữ liệu khuyến mãi.................................
//document.addEventListener('DOMContentLoaded', populatePromoCodes);//đổ dữ liệu khi mở trang document
window.addEventListener('load', populatePromoCodes);

// .....................Hàm tính thanh toán khi có áp dụng mã giảm giá.................................
function addpromotion(totalcost,discount)
{
    var total_pay=totalcost*(1-discount)
    return total_pay
}