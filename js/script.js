const btnaddcart=document.querySelectorAll('.add-to-cart')



btnaddcart.forEach(button => {
    button.addEventListener('click',function(event){
        var btn=event.target
        var productitem=btn.closest('.product-item')

        var price=productitem.querySelector('.product-price').textContent
        var name=productitem.querySelector('.product-name').textContent
       
        addtocart(name,price)
        total()
        delproduct()
    })
});

//...........................................thêm vào giỏ hàng.....................................

function addtocart(productname,productprice){
    var tr=document.createElement('tr')

    var tb = document.querySelector("tbody");
    var rows = tb.querySelectorAll("tr");
    for (var i = 0; i < rows.length; i++) 
        {
            var row = rows[i];
            var existingProductName = row.querySelector(".tl").textContent;
            if (existingProductName === productname) {
                alert("Đã có sản phẩm trong giỏ hàng");
                return;
            }
        }
    var trcontent='<tr><td><span class="tl">'+productname+'</span></td>'+
    '<td><p class="product-price">'+productprice+'</p></td>'+
    '<td><input type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="del">Xóa</span></td>'
    tr.innerHTML=trcontent
    var tb=document.querySelector("tbody")
    tb.append(tr)

}

// ......................................tính tổng.............................................

function total(){
    var item=document.querySelectorAll('tbody tr')
    var i
    var total=0
    for(i=0;i<item.length;i++){
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
            })
        }
    
}