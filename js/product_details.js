
// .....................................đổi ảnh................................
const imagesmall=document.querySelectorAll('.img-small img')

imagesmall.forEach(image => {
    var imgbig=document.querySelector('.img-big img')
    image.addEventListener('click',function()
    {
        var pic
        pic=imgbig.src
        imgbig.src=image.src
        image.src=pic
    })
    
});

// .....................................tăng số lượng................................

const amountid=document.querySelector('#buy-amount')
const btnplus=amountid.querySelector(".btn-plus")
btnplus.addEventListener('click',function()
{
    var quan=document.getElementById('amount').value
    quantity=parseInt(quan)
    quantity=quantity+1
    document.getElementById('amount').value=quantity
})
// .....................................giảm số lượng................................
const btnminus=amountid.querySelector(".btn-minus")
btnminus.addEventListener('click',function()
{
    var quan=document.getElementById('amount').value
    quantity=parseInt(quan)
    if(quantity>1)
        quantity=quantity-1
    else
        quantity=1
    document.getElementById('amount').value=quantity
})
// .....................................kiểm tra input................................
//khi nhập input số lượng không phải là số, input sẽ tự nhảy về 1
var amount=document.getElementById('amount')
amount.addEventListener('input',function()
{
    amount_value=amount.value
    if(amount_value=="")
        return;
    amount_value=parseInt(amount_value)
    if(isNaN(amount_value))
        amount_value=1
    else
        amount_value=amount_value
    
    document.getElementById('amount').value=amount_value
})