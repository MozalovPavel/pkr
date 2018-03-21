//import { isFR } from 'comb.js';

function deckGen() {
    let arr = ["HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK",
        "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK",
        "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK",
        "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK"
    ];
    let deck = [];
    for (let i = 0; i < arr.length; i++) {
        deck[i] = {};
        deck[i].name = arr[i];
        switch (arr[i][0]) {
            case 'H':
                deck[i].suit = 'hearts';
                deck[i].id = 1;
                break;
            case 'D':
                deck[i].suit = 'diamonds';
                deck[i].id = 14;
                break;
            case 'C':
                deck[i].suit = 'clubs';
                deck[i].id = 27;
                break;
            case 'S':
                deck[i].suit = 'spades';
                deck[i].id = 40;
                break;
        }
        switch (arr[i][1]) {
            case 'A':
                deck[i].face = 'Ace';
                deck[i].value = 14;
                deck[i].id += 12;
                break;
            case '2':
                deck[i].face = 'Two';
                deck[i].value = 2;
                break;
            case '3':
                deck[i].face = 'Three';
                deck[i].value = 3;
                deck[i].id += 1;
                break;
            case '4':
                deck[i].face = 'Four';
                deck[i].value = 4;
                deck[i].id += 2;
                break;
            case '5':
                deck[i].face = 'Five';
                deck[i].value = 5;
                deck[i].id += 3;
                break;
            case '6':
                deck[i].face = 'Six';
                deck[i].value = 6;
                deck[i].id += 4;
                break;
            case '7':
                deck[i].face = 'Seven';
                deck[i].value = 7;
                deck[i].id += 5;
                break;
            case '8':
                deck[i].face = 'Eight';
                deck[i].value = 8;
                deck[i].id += 6;
                break;
            case '9':
                deck[i].face = 'Nine';
                deck[i].value = 9;
                deck[i].id += 7;
                break;
            case 'T':
                deck[i].face = 'Ten';
                deck[i].value = 10;
                deck[i].id += 8;
                break;
            case 'J':
                deck[i].face = 'Jack';
                deck[i].value = 11;
                deck[i].id += 9;
                break;
            case 'Q':
                deck[i].face = 'Queen';
                deck[i].value = 12;
                deck[i].id += 10;
                break;
            case 'K':
                deck[i].face = 'King';
                deck[i].value = 13;
                deck[i].id += 11;
                break;
        }
    }
    return deck;
}

function sortCards(cards, bool) {
    if (bool) {
        return cards.sort(function(a, b) {
            return a.id - b.id;
        });
    }
    return cards.sort(function(a, b) {
        return a.value - b.value;
    });

}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function getRandomCards(num, arr) {
    let deck = sortCards(deckGen(), true);
    if (num > deck.length) { num = deck.length }
    let check = [];
    let newDeck = [];
    if (arr) {
        // if (typeof(arr) == "object") {
        if (num > deck.length - arr.length) { num = deck.length - arr.length }

        for (let i = 0; i < arr.length; i++) {
            check[arr[i].id] = true;
        }
    }
    //let cnc = 0;
    while (newDeck.length < num) {
        // можно реализовать просто брать сверху колоды
        let r = randomInteger(1, 52);
        //cnc++;
        if (!check[r]) {
            // console.log(r);
            check[r] = true;
            newDeck.push(deck[r - 1]);
        }
    }
    return newDeck;
    //return cnc;
}
// перетосовать колоду
function getShaffledDeck() {
    return deckGen().sort(function(a, b) {
        return Math.random() - 0.5;
    });
}


// сравнение методов перетасовки 
function tst(num) {
    let fst = [];
    let scn = [];
    let firstTimerStart = Date.now();
    for (var i = 0; i < num; i++) {
        let a = getShaffledDeck()[0].id;
        if (fst[a]>=0){ fst[a]++}
        else {fst[a]=0};
    }
    let firstTimeEnd = Date.now();
    console.log(firstTimeEnd-firstTimerStart);
    let secondTimerStart = Date.now();
    for (var i = 0; i < num; i++) {
        let a = getRandomCards(1)[0].id;
        if (scn[a]>=0){ scn[a]++}
        else {scn[a]=0};
    }
    let secondTimerEnd = Date.now();
    console.log(secondTimerEnd-secondTimerStart);
    console.log(fst);
    console.log(scn);
    return true;
}


// function test(n) {
//     let check = 0;
//     for (let i = 0; i < n; i++) {
//         let a = getRandomCards(9);
//         if (a>check){
//             check=a;
//         }
//
//     }
//     return check;
// }

function connectDecks(a, b) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c[c.length] = {};
        c[c.length - 1].name = a[i].name;
        c[c.length - 1].suit = a[i].suit;
        c[c.length - 1].id = a[i].id;
        c[c.length - 1].face = a[i].face;
        c[c.length - 1].value = a[i].value;
    }
    for (let i = 0; i < b.length; i++) {
        c[c.length] = {};
        c[c.length - 1].name = b[i].name;
        c[c.length - 1].suit = b[i].suit;
        c[c.length - 1].id = b[i].id;
        c[c.length - 1].face = b[i].face;
        c[c.length - 1].value = b[i].value;
    }
    return c;
}

function copyDeck(a) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c[c.length] = {};
        c[c.length - 1].name = a[i].name;
        c[c.length - 1].suit = a[i].suit;
        c[c.length - 1].id = a[i].id;
        c[c.length - 1].face = a[i].face;
        c[c.length - 1].value = a[i].value;
    }
    return c;
}

function drawCards(id, cards) {
    let element = document.getElementById(id);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    for (let i = 0; i <= cards.length - 1; i++) {
        let newImg = document.createElement("img");
        newImg.src = "./cards/" + cards[i].name + ".svg";
        newImg.id = cards[i].name;
        document.getElementById(id).appendChild(newImg);
    }
}

function g() {
    let table = getRandomCards(5);
    wr("tableCards", table);
    drawCards("table", table);
    let p1 = getRandomCards(2, table);
    wr('p1Cards', p1);
    let tp1 = connectDecks(table, p1);
    let p2 = getRandomCards(2, tp1);
    let tp2 = connectDecks(table, p2);
    isFR(tp1);
    isFR(tp2);
    wr('p2Cards', p2);
    drawCards("pl1C", p1);
    drawCards("pl2C", p2);
    return connectDecks(tp1, p2);
}

function wr(id, arr) {
    document.getElementById(id).value = "";
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(id).value += arr[i].name;
        document.getElementById(id).value += ' ';
    }
}

//=============

function isFR(a) {
    let arr = copyDeck(a);
    let count = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].suit) {
            case "hearts":
                count[0] += 1;
                break;
            case "diamonds":
                count[1] += 1;
                break;
            case "clubs":
                count[2] += 1;
                break;
            case "spades":
                count[3] += 1;
                break;
        }
    }
    let max = getMaxOfArray(count);
    if (max > 4) {
        let popSuit = '';
        switch (max) {
            case count[0]:
                popSuit = "hearts";
                break;
            case count[1]:
                popSuit = "diamonds";
                break;
            case count[2]:
                popSuit = "clubs";
                break;
            case count[3]:
                popSuit = "spades";
                break;
        }
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].suit === popSuit)) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }

        let list = []; // list[2]= наличие двойки
        for (let i = 0; i < arr.length; i++) {
            list[arr[i].value] = 1;
        }
        list[1] = list[14];
        let cn = 0;
        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] === 1) {
                cn += 1;
                if (i === 10) {
                    return [true, arr, ost, 9];
                }
            } else {
                cn = 0;
            }
        }
    }
    return false;

}
//------------------------------------
function isSTFL(a) {
    let arr = copyDeck(a);
    let count = [0, 0, 0, 0];
    for (i = 0; i < arr.length; i++) {
        switch (arr[i].suit) {
            case "hearts":
                count[0] += 1;
                break;
            case "diamonds":
                count[1] += 1;
                break;
            case "clubs":
                count[2] += 1;
                break;
            case "spades":
                count[3] += 1;
                break;
        }
    }
    let max = getMaxOfArray(count);
    if (max > 4) {
        let popSuit = '';
        switch (max) {
            case count[0]:
                popSuit = "hearts";
                break;
            case count[1]:
                popSuit = "diamonds";
                break;
            case count[2]:
                popSuit = "clubs";
                break;
            case count[3]:
                popSuit = "spades";
                break;
        }
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].suit === popSuit)) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }

        let list = []; // list[2]= наличие двойки
        for (let i = 0; i < arr.length; i++) {
            list[arr[i].value] = 1;
        }
        list[1] = list[14];
        let cn = 0;
        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] === 1) {
                cn += 1;
                if (cn === 5) {
                    return [true, arr, ost, 8];
                }
            } else {
                cn = 0;
            }
        }
    }
    return false;

}
//-------------------------------------------
function isFOAK(a) {
    let arr = copyDeck(a);
    let counter = getCounter(arr);

    if (getMaxOfArray(counter) === 4) {
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].value === counter.indexOf(4))) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }
        return [true, arr, ost, 7];
    }
    return false;
}

//-------------------------------------------
function isFH(a) {
    let arr = copyDeck(a);
    let counter = getCounter(arr);

    let pair = counter.lastIndexOf(2);
    let threes = counter.lastIndexOf(3)
    if (threes > 0 && pair > 0) {
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!((arr[i].value === threes) || (arr[i].value === pair))) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }
        return [true, arr, ost, 6];
    }
    return false;
}
//-------------------------------------------

function isFLSH(a) {
    let arr = copyDeck(a);
    let count = [0, 0, 0, 0];
    for (i = 0; i < arr.length; i++) {
        switch (arr[i].suit) {
            case "hearts":
                count[0] += 1;
                break;
            case "diamonds":
                count[1] += 1;
                break;
            case "clubs":
                count[2] += 1;
                break;
            case "spades":
                count[3] += 1;
                break;
        }
    }
    let max = getMaxOfArray(count);
    if (max > 4) {
        let popSuit = '';
        switch (max) {
            case count[0]:
                popSuit = "hearts";
                break;
            case count[1]:
                popSuit = "diamonds";
                break;
            case count[2]:
                popSuit = "clubs";
                break;
            case count[3]:
                popSuit = "spades";
                break;
        }
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].suit === popSuit)) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }
        return [true, arr, ost, 5];
    }
    return false;
}
//______________________________-
function isSTR(a) {
    let arr = copyDeck(a);
    let list = []; // list[2]= наличие двойки
    for (let i = 0; i < arr.length; i++) {
        list[arr[i].value] = 1;
    }
    list[1] = list[14];
    let cn = 0;
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] === 1) {
            cn += 1;
            if (cn === 5) {
                let ost = [];
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j].value < i || arr[j].value > (i + 5)) {
                        ost = connectDecks(ost, arr.splice(j, 1));
                        j--;
                    }
                }
                let counter = getCounter(arr);

                while (getMaxOfArray(counter) > 1) {
                    for (let j = 0; j < arr.length; j++) {
                        if (arr[j].value === counter.lastIndexOf(getMaxOfArray(counter))) {
                            ost = connectDecks(ost, arr.splice(j, 1));
                            counter[counter.lastIndexOf(getMaxOfArray(counter))]--;
                            break;
                        }
                    }
                }

                return [true, arr, ost, 4];
            }
        } else {
            cn = 0;
        }
    }
    return false;
}
//====================================
function isTHR(a) {
    let arr = copyDeck(a);
    let counter = getCounter(arr);

    if (getMaxOfArray(counter) === 3) {
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].value === counter.lastIndexOf(3))) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }
        return [true, arr, ost, 3];
    }
    return false;
}
//---------------------
function isPRS(a) {
    let arr = copyDeck(a);
    let counter = getCounter(arr);

    if (getMaxOfArray(counter) === 2) {
        let ost = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i].value === counter.lastIndexOf(2))) {
                ost = connectDecks(ost, arr.splice(i, 1));
                i--;
            }
        }
        counter = getCounter(ost);
        if (getMaxOfArray(counter) === 2) {
            let ost2 = []
            for (let i = 0; i < ost.length; i++) {
                if (!(ost[i].value === counter.lastIndexOf(2))) {
                    ost2 = connectDecks(ost2, ost.splice(i, 1));
                    i--;
                }
            }
            console.log(arr);
            console.log(ost);
            arr = connectDecks(arr, ost);
            console.log(arr);
            return [true, arr, ost2, 2];
        }
        return [true, arr, ost, 1];
    }
    return false;
}
//================
function getHCard(a) {
    let arr = copyDeck(a);
    return sortCards(arr)[arr.length - 1];

}

function getComb(arr) {


}

function get5TopCards(arr, ost) {

}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}


function getCounter(arr) {
    let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = arr.length - 1; j >= 0; j--) {
        counter[arr[j].value] += 1;
    }
    return counter;
}

function tt() {
    let c = 0;
    while (true) {
        c++;
        // console.log(c);
        let b = getRandomCards(7);
        // console.log(b);
        let a = isPRS(b);
        if (a[1]) {
            break;
        }
    }
    // console.log(isFH(a[1]));
    return a;
}


// function t1() {
//     let arr =[0,0,0];
//     for (var i = 0; i < 1000000; i++) {
//         let a = Math.random() - 0.5;
//         if (a<0){ arr[0]++};
//         if (a==0){ arr[1]++};
//         if (a>0){ arr[2]++};
//     }
//     return arr;
// }
// function t2() {
//     let arr =[0,0,0];
//     for (var i = 0; i < 1000000; i++) {
//         let a = Math.round(-1.5 + Math.random() *3);
//         if (a<0){ arr[0]++};
//         if (a===0){ arr[1]++};
//         if (a>0){ arr[2]++};
//     }
//     return arr;
// }


let flashRoyale = [ // от 10 до туза одной масти
    { name: "DA", suit: "diamonds", id: 26, face: "Ace", value: 14 },
    { name: "DT", suit: "diamonds", id: 22, face: "Ten", value: 10 },
    { name: "DJ", suit: "diamonds", id: 23, face: "Jack", value: 11 },
    { name: "DQ", suit: "diamonds", id: 24, face: "Queen", value: 12 },
    { name: "DK", suit: "diamonds", id: 25, face: "King", value: 13 }
];

let straightFlush = [ //5 карт одной масти в порядке возрастания номинала
    { name: "D9", suit: "diamonds", id: 21, face: "Nine", value: 9 },
    { name: "DT", suit: "diamonds", id: 22, face: "Ten", value: 10 },
    { name: "DJ", suit: "diamonds", id: 23, face: "Jack", value: 11 },
    { name: "DQ", suit: "diamonds", id: 24, face: "Queen", value: 12 },
    { name: "DK", suit: "diamonds", id: 25, face: "King", value: 13 }
];

let fourOfAKind = [ // 4 карты одного номинала
    { name: "H6", suit: "hearts", id: 5, face: "Six", value: 6 },
    { name: "D6", suit: "diamonds", id: 18, face: "Six", value: 6 },
    { name: "C6", suit: "clubs", id: 31, face: "Six", value: 6 },
    { name: "S6", suit: "spades", id: 44, face: "Six", value: 6 }
];

let fullHouse = [ // три карты одного номинала и две карты вторго номинала
    { name: "H6", suit: "hearts", id: 5, face: "Six", value: 6 },
    { name: "D6", suit: "diamonds", id: 18, face: "Six", value: 6 },
    { name: "C6", suit: "clubs", id: 31, face: "Six", value: 6 },
    { name: "DQ", suit: "diamonds", id: 24, face: "Queen", value: 12 },
    { name: "SQ", suit: "spades", id: 50, face: "Queen", value: 12 }
];

let flush = [ // 5 карт одной масти
    { name: "C3", suit: "clubs", id: 28, face: "Three", value: 3 },
    { name: "C7", suit: "clubs", id: 32, face: "Seven", value: 7 },
    { name: "CT", suit: "clubs", id: 35, face: "Ten", value: 10 },
    { name: "CQ", suit: "clubs", id: 37, face: "Queen", value: 12 },
    { name: "CA", suit: "clubs", id: 39, face: "Ace", value: 14 }
];

let straigh = [ // 5 карт в порядке возрастания номинала
    { name: "H5", suit: "hearts", id: 4, face: "Five", value: 5 },
    { name: "C6", suit: "clubs", id: 31, face: "Six", value: 6 },
    { name: "D7", suit: "diamonds", id: 19, face: "Seven", value: 7 },
    { name: "S8", suit: "spades", id: 46, face: "Eight", value: 8 },
    { name: "D9", suit: "diamonds", id: 21, face: "Nine", value: 9 }
];

let threeOfAKind = [ // три карты одного номинала
    { name: "D8", suit: "diamonds", id: 20, face: "Eight", value: 8 },
    { name: "C8", suit: "clubs", id: 33, face: "Eight", value: 8 },
    { name: "H8", suit: "hearts", id: 7, face: "Eight", value: 8 }
];

let twoPair = [ // две карты одного номинала и две карты второго номинала
    { name: "H3", suit: "hearts", id: 2, face: "Three", value: 3 },
    { name: "S3", suit: "spades", id: 41, face: "Three", value: 3 },
    { name: "DK", suit: "diamonds", id: 25, face: "King", value: 13 },
    { name: "HK", suit: "hearts", id: 12, face: "King", value: 13 }
];

let onePair = [ // две карты одного номинала
    { name: "C7", suit: "clubs", id: 32, face: "Seven", value: 7 },
    { name: "S7", suit: "spades", id: 45, face: "Seven", value: 7 }
];