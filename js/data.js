let rarity = {
    one: '★',
    two: '★★',
    three: '★★★',
    four: '★★★★',
    five: '★★★★★',
}

let region = {
    mondstadt: 'Mondstadt',
    liyue: 'Liyue',
    inazuma: 'Inazuma',
    sumeru: 'Sumeru',
    fontaine: 'Fontaine',
}

let types = {
    recovery: 'Recovery',
    to_attack: 'To Attack',
    for_protection: 'For Protection',
    for_endurance: 'For Endurance',
}

let buff = {

    treatment: 'Treatment',
    attack_power: 'Attack Power',
    protection: 'Protection',
    stamina_recovery: 'Stamina Recovery',

}

let cardData = [
    /*==================Recovery=====================================*/
    /*Blagodenstvie*/
    {
        id: 1,
        img: '../img/food/treatment_3/blagodenstvie-optimized.png',
        title: 'Blagodenstvie',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Aromatnyy Myasnoy Rulet*/
    {
        id: 2,
        img: '../img/food/treatment_3/aromatnyy-myasnoy-rulet-optimized.png',
        title: 'Aromatnyy Myasnoy Rulet',
        region: region.sumeru,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 2000,
    },

    /*Bodryaschee Koshache Lakomstvo*/
    {
        id: 3,
        img: '../img/food/treatment_3/bodryaschee-koshache-lakomstvo-optimized.png',
        title: 'Bodryaschee Koshache Lakomstvo',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 2500,
    },

    /*Chay v Polnolunie*/
    {
        id: 4,
        img: '../img/food/treatment_3/chay-v-polnolunie-optimized.png',
        title: 'Chay v Polnolunie',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 2000,
    },

    /*Chyornyy Okun*/
    {
        id: 5,
        img: '../img/food/treatment_3/chyornyy-okun-optimized.png',
        title: 'Chyornyy Okun',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 3000,
    },

    /*Gamburger s Hrustyaschey Kuritsey*/
    {
        id: 6,
        img: '../img/food/treatment_3/gamburger-s-hrustyaschey-kuritsey-optimized.png',
        title: 'Gamburger s Hrustyaschey Kuritsey',
        region: region.mondstadt,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1500,
    },

    /*Gribnaya Pitstsa*/
    {
        id: 7,
        img: '../img/food/treatment_3/gribnaya-pitstsa-optimized.png',
        title: 'Gribnaya Pitstsa',
        region: region.mondstadt,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 4000,
    },

    /*Hrustyaschie Krevetki s Kartofelem*/
    {
        id: 8,
        img: '../img/food/treatment_3/hrustyaschie-krevetki-s-kartofelem-optimized.png',
        title: 'Hrustyaschie Krevetki s Kartofelem',
        region: region.mondstadt,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 5500,
    },

    /*Kartofelnaya Lodochka*/
    {
        id: 9,
        img: '../img/food/treatment_3/kartofelnaya-lodochka-1-optimized.png',
        title: 'Kartofelnaya Lodochka',
        region: region.sumeru,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 2000,
    },

    /*Kofeynyy Bavarua*/
    {
        id: 10,
        img: '../img/food/treatment_3/kofeynyy-bavarua-optimized.png',
        title: 'Kofeynyy Bavarua',
        region: region.fontaine,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*lazanya*/
    {
        id: 11,
        img: '../img/food/treatment_3/lazanya-optimized.png',
        title: 'Lazanya',
        region: region.fontaine,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Mondshtadtskie Oladushki */
    {
        id: 12,
        img: '../img/food/treatment_3/mondshtadtskie-oladushki-optimized.png',
        title: 'Mondshtadtskie Oladushki',
        region: region.mondstadt,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Moti s Sakuroy */
    {
        id: 13,
        img: '../img/food/treatment_3/moti-s-sakuroy-optimized.png',
        title: 'Moti s Sakuroy',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Myasnoe ragu po Shahrizabzski */
    {
        id: 14,
        img: '../img/food/treatment_3/myasnoe-ragu-po-shahrizabzski-optimized.png',
        title: 'Myasnoe Ragu Shahrizabzski',
        region: region.sumeru,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Osobaya Gribnaya Pitstsa */
    {
        id: 15,
        img: '../img/food/treatment_3/osobaya-gribnaya-pitstsa-optimized.png',
        title: 'Osobaya Gribnaya Pitstsa',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Pita */
    {
        id: 16,
        img: '../img/food/treatment_3/pita-1-optimized.png',
        title: 'Pita',
        region: region.sumeru,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Polnolunnaya yaichnitsa */
    {
        id: 17,
        img: '../img/food/treatment_3/polnolunnaya-yaichnitsa-1-optimized.png',
        title: 'Polnolunnaya yaichnitsa',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Portovyy Govyazhiy Zheludok */
    {
        id: 18,
        img: '../img/food/treatment_3/portovyy-govyazhiy-zheludok-optimized.png',
        title: 'Portovyy Govyazhiy Zheludok',
        region: region.fontaine,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Radost Zhizni */
    {
        id: 19,
        img: '../img/food/treatment_3/radost-zhizni-optimized.png',
        title: 'Radost Zhizni',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Ragu Kondy*/
    {
        id: 20,
        img: '../img/food/treatment_3/ragu-kondy-optimized.png',
        title: 'Ragu Kondy',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Ryba Belka */
    {
        id: 21,
        img: '../img/food/treatment_3/ryba-belka-optimized.png',
        title: 'Ryba Belka',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Rybnyy Sup de Puasson*/
    {
        id: 22,
        img: '../img/food/treatment_3/rybnyy-sup-de-puasson-optimized.png',
        title: 'Rybnyy Sup de Puasson',
        region: region.fontaine,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Rybya Pesn */
    {
        id: 23,
        img: '../img/food/treatment_3/rybya-pesn-optimized.png',
        title: '*Rybya Pesn',
        region: region.fontaine,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Sbornaya Zapekanka */
    {
        id: 24,
        img: '../img/food/treatment_3/sbornaya-zapekanka-optimized.png',
        title: 'Sbornaya Zapekanka',
        region: region.mondstadt,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Shariki s Krevetkoy */
    {
        id: 25,
        img: '../img/food/treatment_3/shariki-s-krevetkoy-1-optimized.png',
        title: 'Shariki s Krevetkoy',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*Svinoy Sup s Bambukom */
    {
        id: 26,
        img: '../img/food/treatment_3/svinoy-sup-s-bambukom-optimized.png',
        title: 'Svinoy Sup s Bambukom',
        region: region.liyue,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Tahchin*/
    {
        id: 27,
        img: '../img/food/treatment_3/tahchin-1-optimized.png',
        title: 'Tahchin',
        region: region.sumeru,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Tartar iz Steyka*/
    {
        id: 28,
        img: '../img/food/treatment_3/tartar-iz-steyka-optimized.png',
        title: 'Tartar iz Steyka',
        region: region.fontaine,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Tayyaki*/
    {
        id: 29,
        img: '../img/food/treatment_3/tayyaki-optimized.png',
        title: 'Tayyaki',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Tonkotsu Ramen*/
    {
        id: 30,
        img: '../img/food/treatment_3/tonkotsu-ramen-optimized.png',
        title: 'Tonkotsu Ramen',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Tryohtsvetnoe Dango*/
    {
        id: 31,
        img: '../img/food/treatment_3/tryohtsvetnoe-dango-optimized.png',
        title: 'Tryohtsvetnoe Dango',
        region: region.inazuma,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Tushyonoe Myaso s Yablokami*/
    {
        id: 32,
        img: '../img/food/treatment_3/tushyonoe-myaso-s-yablokami-optimized.png',
        title: 'Tushyonoe Myaso s Yablokami',
        region: region.mondstadt,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /* Ugolnaya lepyoshka Adzhilenah*/
    {
        id: 33,
        img: '../img/food/treatment_3/ugolnaya-lepyoshka-adzhilenah-1-optimized.png',
        title: 'Ugolnaya lepyoshka Adzhilenah',
        region: region.sumeru,
        types: types.recovery,
        buff: buff.treatment,
        rarity: rarity.three,
        cost: 1000,
    },

    /*=====================Attack==========================*/


    /* */
    /* */
    /* */
    /* */
















];