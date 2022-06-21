if(localStorage.getItem('basket') === null) {
  localStorage.setItem('basket',JSON.stringify([]));
}
let buttons = document.querySelectorAll('.addbutton');
for (let btn of buttons) {
  btn.addEventListener('click',function(e){
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let prodid=e.target.parentElement.parentElement.id;
    let prodimg = e.target.parentElement.previousElementSibling.src;
    let prodname = e.target.previousElementSibling.previousElementSibling.innerHTML;
    let prodprice=e.target.previousElementSibling.innerHTML;
    let checkprod=basket.find(x=> x.id ==prodid);

 
    if (checkprod===undefined) {
      basket.push({
        id:prodid,
        image:prodimg,
        name:prodname,
        price:prodprice,
        count:1
      })
    }
    else{
      checkprod.count++;
    }
    localStorage.setItem('basket',JSON.stringify(basket));
    CountProduct();
  })

}

function CountProduct() {
  let basket = JSON.parse(localStorage.getItem('basket'));
  document.getElementById('count').innerHTML = basket.length
}

CountProduct();