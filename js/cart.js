let subtotal__lable = document.getElementById('lable');
let table = document.getElementById('table');
let basket = JSON.parse(localStorage.getItem("data")) || [];



let calculation = () => {
    let cardIcon = document.getElementById("count");
    cardIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCart = () => {
    if (basket.length !== 0) {
        return (table.innerHTML = basket.map((x) => {

            let { id, item } = x;
            let search = cardData.find((y) => y.id === id) || [];

            return `
            <table class="table">
            
                <tr>
                    <td>
                        <img src=${search.img} alt=""
                            class="table__img">
                    </td>
    
                    <td>
                        <h3 class="table__title">${search.title}</h3>
                    </td>
    
                    <td>
                        <div class="cart__cost-nav">
                            <span class="table__price">${search.cost}</span>
                            <img src="../img/mora.png" class="cart__cost-mora" alt="">
                        </div>
                    </td>
    
                    <td>
                        <div class="table__buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </td>
    
                    <td>
                        <div class="cart__cost-nav">
                        <span class="table__subtotal">${item * search.cost}</span>
                        <img src="../img/mora.png" class="cart__cost-mora" alt="">
                        </div>
                    </td>
    
                    <td>
                        <i onclick="removeItem(${id})" class="bi bi-trash3"></i>
                    </td>
    
                </tr>
            </table>
    
            
            `;

        }).join(""));

    } else {

        subtotal__lable.innerHTML = `
        <h2 class="subtotal__title">Cart is Empty</h2>
        <div class="subtotal__img">
            <img src="../img/cart/cart-img.png" alt="" class="subtotal-img">
        </div>
        <a href="../index/main.html">
            <button class="subtotal__btn">Back to menu</button>
        </a>
        `;

        document.getElementById('table__nav').style.display = "none";
        document.getElementById('table').style.display = "none";
    }
};

generateCart();


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });

    }
    else {
        search.item += 1;
    };


    generateCart();
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));

};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    };

    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
    generateCart();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
    generateCart();
    TotalAmount();
};

let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = cardData.find((y) => y.id === id) || [];
            return item * search.cost;
        }).reduce((x, y) => x + y, 0);

        subtotal__lable.innerHTML = `
        
        <div class="subtotal__cost">
            <div class="subtotal__title">Total Bill:</div>
            <div class="subtotal__cost-cost">
                <span class="subtotal__price">${amount}</span>
                <img src="../img/mora.png" class="cart__cost-mora" alt="">
            </div>
        </div>
        <div class="cart__action">
            <a href="" class="cart__btn">
            <i class="cart-shopping"></i>
            Continue
            </a>
        </div>
    `;
    } else return;
};

TotalAmount();