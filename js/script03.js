

//.................................hiện giỏ hàng.................................
icon=document.querySelector(".nav_icons")
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
        document.querySelector(".cart").style.right="0"
        
        var btn=event.target
        var productitem=btn.closest('.product-item')

        var price=productitem.querySelector('.product-price').textContent
        var name=productitem.querySelector('.product-name').textContent
        var image = productitem.querySelector('.product-image img').src
        if(check(name)==true)
            {
                alert("Đã có sản phẩm trong giỏ hàng");
                return;
            }


        addtocart(name,price, image)//thêm sản phẩm vào giỏ hàng
        total()//tính tổng
        delproduct()//xóa sản phẩm khỏi giỏ hàng
        changeinput()//thay đổi số lượng
        saveCart()
        
    })
});

//...........................................thêm vào giỏ hàng.....................................

function addtocart(productname,productprice,productimage){
    var tr=document.createElement('tr')

    var trcontent = '<tr><td><img src="' + productimage + '" alt="' + productname + '" class="product-img"><span class="tl">' + productname + '</span></td>' +
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
    var cost_not_promo=document.querySelector('.cost-final span')
    cost_not_promo.innerHTML=totalformat
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
        cost_pay_format=cost_pay.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        cost_pay_final.innerHTML=cost_pay_format
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
        var productimage = row.querySelector('.product-img').src; // Lấy thông tin ảnh sản phẩm
        cartData.push({ name: productname, price: productprice, quantity: quantity, image: productimage });
    });
    localStorage.setItem('cart', JSON.stringify(cartData));
}

// .........................Hàm tải dữ liệu giỏ hàng từ localStorage....................................
function loadCart() {
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    cartData.forEach(product => {
        addtocart(product.name, product.price, product.image);
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

// ................................................................Mục yêu thích nhé.............................................
// ................................................................Mục yêu thích nhé.............................................
// ................................................................Mục yêu thích nhé.............................................
// ................................................................Mục yêu thích nhé.............................................

// ........................................click vào tym thì sẽ đổi màu......................................
var btnheart=document.querySelectorAll('.product-favor')
btnheart.forEach(btn => {
    let isFilled=false
    btn.addEventListener('click',function()
    {
        
        var icon_heart = btn.querySelector('i');

        // Kiểm tra và thay đổi lớp của biểu tượng
        if (isFilled) {
            icon_heart.classList.remove('fa-solid');
            icon_heart.classList.add('fa-regular');
            isFilled = false;
            alert("Đã xóa sản phẩm khỏi mục yêu thích")
        } else {
            icon_heart.classList.remove('fa-regular');
            icon_heart.classList.add('fa-solid');
            alert("Đã thêm sản phẩm vào yêu thích")
            isFilled = true;
        }
    })
});

//........................................hàm filter......................................



function filterFavorites() {
    var products = document.querySelectorAll('.products .product-item'); // Lấy danh sách tất cả các sản phẩm
    for(var i=0;i<products.length;i++)
        {
            // console.log(products[i]);
            const icon_heart = products[i].querySelector('.product-favor i');
            //console.log(icon_heart)
            if (icon_heart.classList.contains('fa-solid')) {
                products[i].style.display = ''; // Hiển thị sản phẩm nếu là yêu thích
            } else {
                products[i].style.display = 'none'; // Ẩn sản phẩm nếu không phải yêu thích
            }

        }
}

//.........................................sự kiện.....................................
const filterid=document.getElementById('filterOptions')
//console.log(filterid)
const filter_favor_a=filterid.querySelector('.filter-favor')

filter_favor_a.addEventListener('click',function(event){
    event.preventDefault();
    filterFavorites()
})

// ................................................................Mục khuyến mãi.............................................
// ................................................................Mục khuyến mãi.............................................
// ................................................................Mục khuyến mãi.............................................
// ................................................................Mục khuyến mãi.............................................

var products = document.querySelectorAll('.products .product-item')

const filter_promo_a=filterid.querySelector('.filter-promo')
filter_promo_a.addEventListener('click',function(event){
    event.preventDefault();
    for(var i=0;i<products.length;i++)
        {
            var promo=products[i].querySelector('.product-promotion')
            //console.log(promo)
            if(promo==null)
                products[i].style.display='none';
                //console.log("hihi")
            else
                products[i].style.display='';
                //console.log("haha");
        }
})

// ................................................................Sắp xếp nhé.............................................
// ................................................................Sắp xếp nhé.............................................
// ................................................................Sắp xếp nhé.............................................
// ................................................................Sắp xếp nhé.............................................
const sortid=document.getElementById('sort-select')
//console.log(sortid);
const ul=document.querySelector('.products')
//console.log(ul)


//chuyển price từ mảng product_infor từ text sang float để sắp xếp
product_infor_array=[]
for(var i=0;i<product_infor.length;i++)
    {
        product_infor_array.push(product_infor[i])
    }
product_infor_array = product_infor_array.map(product => {
        let price_=product.price
        price_=price_.substring(0, price_.length - 1)
        price_=price_.replace('.','')
        price_=parseFloat(price_);

        return {
            ...product,  // Sao chép tất cả các thuộc tính của đối tượng product gốc
            price: price_  // Cập nhật giá trị price đã chuyển đổi
        };
});
sortid.addEventListener("change",function(){
    
    // sắp xếp nè
    var op_sort=sortid.value
    if(op_sort==='asc')
        pro_new=product_infor_array.sort((a, b) => a.price - b.price);

    if(op_sort=='desc')
        pro_new=product_infor_array.sort((a, b) => b.price - a.price);
        //console.log(pro_new)


    ul.innerHTML=''
    for(var i=0;i<pro_new.length;i++)
        {
            product_ele=pro_new[i]
            //console.log(product_ele);
            addproduct(product_ele.name,product_ele.price,product_ele.image,product_ele.alt,product_ele.promo,product_ele.dis)
        }
    function addproduct(name,price,img,alt,promo,dis){
        var promotion
        if(promo==true)
            promotion='<div class="product-promotion">'+dis+'</div>'
        else
            promotion=''
        var priceformat=price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
        var li=document.createElement('li')
        var li_content='<div class="product-item">'+
                    promotion+
                    '<div class="product-top">'+
                        '<a href="" class="product-image">'+
                            '<img src="'+img+'" alt="'+alt+'">'+
                        '</a>'+
                        '<a href="" class="buy-now">Mua ngay</a>'+
                    '</div>'+
                    '<div class="product-infor">'+
                        '<!-- tên sản phẩm + giá -->'+
                        '<a href="" class="product-name">'+name+'</a>'+
                        '<a href="" class="product-price">'+priceformat+'</a> '+
                    '</div>'+
                    '<ul class="product-button">'+
                        '<li>'+
                            '<button class="add-to-cart"><i class="fa fa-shopping-cart"></i></button>'+
                        '</li>'+
                        '<li>'+
                            '<button class="product-favor"><i class="fa-regular fa-heart"></i></button>'+
                                
                        '</li>'+
                    '</ul>'+
                '</div>'
        li.innerHTML=li_content
        ul.append(li)
}
})
