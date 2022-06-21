function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    if(basket.length === 0) {
        let alert_div = '';

        alert_div = `
            <div class="alert text-center alert-danger" role="alert">
            Empety!!
                </div>
        `
        document.getElementById('list').innerHTML = alert_div
    }
    else{
        let div = '';

        basket.forEach(item => {
            div += `
            <div class="box d-flex justify-content-between align-items-center">
            <div class="col-lg-2">
                <img src=${item.image} alt="">
            </div>
            <div class="col-lg-3">
                <h5>Mehsulun adi: ${item.name}</h5>
            </div>
            <div class="col-lg-2">
                <h6>Qiymet: ${item.price}</h6>
            </div>
            <div class="col-lg-2">
                <span>Count: ${item.count}</span>
            </div>
            <div class="col-lg-2">
            <a class="delete" href=""><i class="fa-solid fa-trash-can"></i></a>
            </div>
        </div>
            `
        })
    
        document.getElementById('list').innerHTML = div;
    }
}

GetProducts();
function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length
}
CountProduct();


let btndelet=document.querySelectorAll('.delete');
   for (let btnd of btndelet) {
  btnd.addEventListener('click',function(a) {
    e.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let prodid=a.target.parentElement.parentElement.id;
    let checkprod=basket.find(x=> x.id ==prodid);
    basket.removeItem(checkprod);
  })
   }