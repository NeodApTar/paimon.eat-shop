let menu__content = document.getElementById("menu__content");
let basket = JSON.parse(localStorage.getItem("data")) || [];

/*===========================================*/
const domElements = {
    menu__content: document.getElementById('menu__content'),
    search: {
        input: document.getElementById('search-input'),
        button: document.getElementById('search-button'),
    },
    filters: {
        rarity: document.getElementById('filter-rarity'),
        region: document.getElementById('filter-region'),
        types: document.getElementById('filter-type'),
        buff: document.getElementById('filter-buff'),
    }
}

function generateCard(data) {
    const card = [];
    let search = basket.find((x) => x.id === id) || [];
    for (let i = 0; i < data.length; i++) {
        card.push(`
        <div id=card-id-${data[i].id} class="card">
        <a href="card.html?id=${data[i].id}">
            <img src="${data[i].img}" alt=""
                class="card__img">
            <div class="card__title-nav">
                <h3 class="card__title">${data[i].title}</h3>
            </div>
        </a>
        <div class="card__content">

            <div class="card__info">
                <div class="card__param">
                    <div class="card__meaning">Region:</div>
                    <div id="region" class="card__description">${data[i].region}</div>
                </div>

                <div class="card__param">
                    <div class="card__meaning">Type:</div>
                    <div id="type" class="card__description">${data[i].types}</div>
                </div>

                <div class="card__param">
                    <div class="card__meaning">Buff:</div>
                    <div id="buff" class="card__description">${data[i].buff}</div>
                </div>
            </div>
            <div class="card__footer">
                <div class="card__cost">
                    <span>Price:</span>
                    <div class="card__cost-nav">
                        <div class="card__cost-cost">${data[i].cost}</div>
                        <img src="../img/mora.png" class="card__cost-mora" alt="">
                    </div>
                </div>
                <div class="card__buttons">
                    <i onclick="decrement(${data[i].id})" class="bi bi-dash-lg"></i>
                    <div id=${data[i].id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <i onclick="increment(${data[i].id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>

</div>
        `)
    }


    return card
}

{
    let searchValue = ''

    domElements.search.input.oninput = (event) => {
        searchValue = event.target.value
        filterSearch()
    }

    domElements.search.button.onclick = () => {
        filterSearch()
    }

    function filterSearch() {
        const rgx = new RegExp(searchValue, 'i')
        let filteredCardData = cardData.filter(card => {
            if (rgx.test(card.title)) {
                return true
            } else {
                return false
            }
        })

        domElements.menu__content.innerHTML = generateCard(filteredCardData).join('')

    }
}

/* FILTER CATEGORIES */
{
    const filtersType = [
        'region',
        'rarity',
        'types',
        'buff',
    ]


    function filterSelect(filterType) {
        domElements.filters[filterType].onchange = (event) => {
            const value = event.target.value

            const filteredCards = cardData.filter(card => {
                if (filterType == 'rarity') {
                    if (card[filterType].length == value.length || value.length == 0) {

                        return true;
                    } else

                        return false;


                }
                else {
                    const reg = new RegExp(value)
                    if (reg.test(card[filterType])) {
                        return true
                    } else {
                        return false
                    }
                }
            })
            const fullFilteredCards = checkOtherFilters(filtersType, filteredCards)
            const filteredCardsHTML = generateCard(fullFilteredCards)
            domElements.menu__content.innerHTML = filteredCardsHTML.join('')
        }

    }
    filtersType.forEach(type => filterSelect(type))

    function checkOtherFilters(filtersType, filteredCards) {
        let updateFilteredCards = filteredCards

        filtersType.forEach(type => {
            const value = domElements.filters[type].value
            const reg = new RegExp(value)
            const newFilteredCards = updateFilteredCards.filter(card => {
                if (reg.test(card[type])) {
                    return true
                } else {
                    return false
                }
            })
            updateFilteredCards = newFilteredCards
        })
        return updateFilteredCards
    }
}

/*===========================================*/


let generateMenu__content = () => {

    return (menu__content.innerHTML = cardData.map((x) => {
        let { id, img, title, region, types, buff, cost } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=card-id-${id} class="card">
                    <a href="card.html?id=${id}">
                        <img src="${img}" alt=""
                            class="card__img">
                        <div class="card__title-nav">
                            <h3 class="card__title">${title}</h3>
                        </div>
                    </a>
                    <div class="card__content">

                        <div class="card__info">
                            <div class="card__param">
                                <div class="card__meaning">Region:</div>
                                <div id="region" class="card__description">${region}</div>
                            </div>

                            <div class="card__param">
                                <div class="card__meaning">Type:</div>
                                <div id="type" class="card__description">${types}</div>
                            </div>

                            <div class="card__param">
                                <div class="card__meaning">Buff:</div>
                                <div id="buff" class="card__description">${buff}</div>
                            </div>
                        </div>
                        <div class="card__footer">
                            <div class="card__cost">
                                <span>Price:</span>
                                <div class="card__cost-nav">
                                    <div class="card__cost-cost">${cost}</div>
                                    <img src="../img/mora.png" class="card__cost-mora" alt="">
                                </div>
                            </div>
                            <div class="card__buttons">
                                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                    </div>

        </div>

`;
    }).join(""));
};

generateMenu__content();

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
