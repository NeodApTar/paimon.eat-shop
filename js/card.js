let basket = JSON.parse(localStorage.getItem("data")) || [];


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


    //console.log(basket);
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
    //console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cardIcon = document.getElementById("count");
    cardIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

const card_img = document.getElementById("card_img");
const card_title = document.getElementById("title");
const card_cost = document.getElementById("cost");
const card__rarity = document.getElementById("rarity");

function getparam(params) {
    const url = new URLSearchParams(window.location.search);
    const param = url.get(params);
    return param;
}

function updatecard() {
    id_ = getparam('id');
    id_ -= 1;
    card_title.innerHTML = cardData[id_].title;
    card_cost.innerHTML = cardData[id_].cost;
    card__rarity.innerHTML = cardData[id_].rarity;
    card_img.innerHTML = `<img src="${cardData[id_].img}" alt="" class="details__img">`;
}

updatecard();