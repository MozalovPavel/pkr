// window.onload = function() {
//   alert( 'Документ и все ресурсы загружены' );
// };
function chek(Name) {
    var buttons = document.getElementsByName(Name);
    for (var i = buttons.length - 1; i >= 0; i--) {
        if (buttons[i].checked) return buttons[i].value;
    }
}

function chekCard(num) {
    document.getElementById(num + "n").value = '';
    document.getElementById(num + "n").value += chek(num + "1");
    document.getElementById(num + "n").value += chek(num + "2");
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function setR(num) {
    document.getElementsByName(num + '1')[randomInteger(0, 3)].checked = true;
    document.getElementsByName(num + '2')[randomInteger(0, 12)].checked = true;
}

function both(num) {
    setR(num);
    chekCard(num);
}

function vse() {
    for (i = 1; i <= 2; i++) {
        setR(i);
        chekCard(i);
    }
    document.getElementById("0n").value = '';
    for (var i = 1; i <= 2; i++) {
        document.getElementById("0n").value += document.getElementById(i + "n").value;
        document.getElementById("0n").value += ' ';
    }
}


function one() {
    var cards = ["HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK",
        "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK",
        "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK",
        "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK"
    ];
    for (var i = 0; i <= cards.length - 1; i++) {
        document.getElementById("deck").value += cards[i];
        document.getElementById("deck").value += ' ';
    }
}

window.onload = function() {
    one();
};

function shuffle() {
    var cards = ["HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK",
        "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK",
        "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK",
        "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK"
    ];

    var bi = [];
    for (var i = 0; i <= cards.length - 1; i++) {
        bi[i] = [];
        bi[i][0] = cards[i];
        bi[i][1] = true;
    }

    var deck = [];
    // for (var i = 0; i <= 51; i++) {
    // 	r = randomInteger(0, 51);
    // 	if (cards[r][1]== true){
    // 		deck[i] = cards[r][0];
    // 	}else{

    // 	}
    // };

    i = 0;
    document.getElementById("NewDeck").value = '';
    // var start = Date.now();
    while (deck.length < 52) {
        var r = randomInteger(0, 51);
        if (bi[r][1] === true) {
            deck[deck.length] = bi[r][0];
            document.getElementById("NewDeck").value += bi[r][0];
            document.getElementById("NewDeck").value += ' ';

            bi[r][1] = false;
        }
        i++;
    }
    console.log(deck);

    console.log(sortCards(deck));
    // var end = Date.now();
    // console.log(start + ' ' + end)
    // return end-start;
}

function sc() {
    var cards = ["HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK",
        "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK",
        "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK",
        "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK"
    ];

    var bi = [];
    for (var i = 0; i <= cards.length - 1; i++) {
        bi[i] = [];
        bi[i][0] = cards[i];
        bi[i][1] = true;
    }

    var sevenCards = [];

    var i = 0;
    document.getElementById("sevenCards").value = '';
    // var start = Date.now();
    while (sevenCards.length < 7) {
        r = randomInteger(0, 51);
        if (bi[r][1] == true) {
            sevenCards[sevenCards.length] = bi[r][0];
            document.getElementById("sevenCards").value += bi[r][0];
            document.getElementById("sevenCards").value += ' ';

            bi[r][1] = false;
        }
        i++;
    }
    addImgs(sevenCards)
    return comb(sevenCards);
}

function mycards() {
    arr = document.getElementById('myCards').value.split(" ");
    arr.splice(7, 1);
    addImgs(arr);
    comb(arr);
    return arr;
}

function addImgs(arr) {
    var element = document.getElementById("imgs");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for (var i = 0; i <= arr.length - 1; i++) {
        var newImg = document.createElement("img");
        newImg.src = "./cards/" + arr[i] + ".svg";
        newImg.id = arr[i];
        document.getElementById("imgs").appendChild(newImg);
    }
    return true;
}
//  SJ CQ S3 C7 DT CK D9
function comb(arr) {
    var faces = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        face = arr[i][1];
        switch (face) {
            case 'A':
                face = 14;
                break;
            case 'T':
                face = 10;
                break;
            case 'J':
                face = 11;
                break;
            case 'Q':
                face = 12;
                break;
            case 'K':
                face = 13;
                break;
        }
        if (faces[face] >= 0) {
            faces[face] += 1;
        } else {
            faces[face] = 1;
        }
    }
    //-----------------------------------------
    suits = [0, 0, 0, 0];
    for (var i = 0; i <= arr.length - 1; i++) {
        switch (arr[i][0]) {
            case 'H':
                suits[0] += 1;
                break;
            case 'D':
                suits[1] += 1;
                break;
            case 'C':
                suits[2] += 1;
                break;
            case 'S':
                suits[3] += 1;
                break;
        }
    }
    var maxSuits = getMaxOfArray(suits);
    var popSuit = '';
    if (maxSuits >= 5) {
        for (i = suits.length - 1; i >= 0; i--) {
            if (suits[i] === maxSuits) {
                switch (i) {
                    case 3:
                        popSuit = "S";
                        break;
                    case 2:
                        popSuit = "C";
                        break;
                    case 1:
                        popSuit = "D";
                        break;
                    case 0:
                        popSuit = "H";
                        break;
                }
            }
        }
        var inSuit = [];
        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i][0] === popSuit) {
                face2 = arr[i][1];
                switch (face2) {
                    case 'A':
                        face2 = 14;
                        break;
                    case 'T':
                        face2 = 10;
                        break;
                    case 'J':
                        face2 = 11;
                        break;
                    case 'Q':
                        face2 = 12;
                        break;
                    case 'K':
                        face2 = 13;
                        break;
                }
                if (inSuit[face2] >= 0) {
                    inSuit[face2] += 1;
                } else {
                    inSuit[face2] = 1;
                }
            }

        }
        inSuit[1] = inSuit[14];
        cn = 0;
        for (var i = inSuit.length - 1; i >= 0; i--) {
            if (inSuit[i] == 1) {
                cn += 1;
                if (cn == 5) {
                    console.log(i);
                    if (i == 10) {
                        console.log("!!!!!!!!!!!!!!");
                        console.log("Royal Flush");
                        console.log("!!!!!!!!!!!!!!");
                        console.log("------");
                        return 9;
                    } else {
                        console.log("Straight Flush");
                        console.log("!!!!!!!!!!!!!!");
                        console.log("------");
                        return 8;
                    }
                }
            } else {
                cn = 0
            }
        }
        console.log("Flush");
        console.log("!!!!!");
        console.log("------");
        return 5;
    }

    //--------------------------------------

    for (var i = faces.length - 1; i >= 0; i--) {
        if (faces[i] == 4) {
            console.log('four of ' + i);
            console.log("!!!!!!");
            console.log("------");
            return 7;
        }
    }
    //===========
    for (var i = faces.length - 1; i >= 0; i--) {
        if (faces[i] == 3) {
            for (var i = faces.length - 1; i >= 0; i--) {
                if (faces[i] == 2) {
                    console.log('Full House');
                    console.log("------");
                    return 6;
                }
            }
        }
    }
    //---------
    var strFaces = faces;
    strFaces[1] = strFaces[14];
    var facesCn = 0;
    for (i = strFaces.length - 1; i >= 0; i--) {
        if (strFaces[i] >= 1) {
            facesCn += 1;
            if (facesCn === 5) {
                console.log('Straight');
                console.log("------");
                return 4;
            }
        } else {
            facesCn = 0;
        }
    }
    //-------

    for ( i = faces.length - 1; i >= 0; i--) {
        if (faces[i] === 3) {
            console.log('three of ' + i);
            console.log("------");
            return 3;
        }
    }
    //------
    pairs = 0;
    for (var i = faces.length - 1; i >= 2; i--) {
        if (faces[i] == 2) {
            pairs += 1;
            console.log('pair of ' + i);
            if (pairs == 2) {
                console.log("------");
                return 2;
            }
        }
    }
    if (pairs == 1) {
        console.log("------");
        return 1;
    }
    card = faces.length - 1;
    console.log('High card ' + card);
    console.log("------");
    return 0;
}

function res(num,comb,arr) {
    switch (num){

    }

}

function sortCards(arr) {
    var cards = []
    for (var i = 0; i <= arr.length - 1; i++) {
        cards[i]={};
        cards[i].name = arr[i];
        switch (arr[i][1]){
            case 'A':
                cards[i].value = 14;
                break;
            case 'K':
                cards[i].value = 13;
                break;
            case 'Q':
                cards[i].value = 12;
                break;
            case 'J':
                cards[i].value = 11;
                break;
            case 'T':
                cards[i].value = 10;
                break;
            case '9':
                cards[i].value = 9;
                break;
            case '8':
                cards[i].value = 8;
                break;
            case '7':
                cards[i].value = 7;
                break;
            case '6':
                cards[i].value = 6;
                break;
            case '5':
                cards[i].value = 5;
                break;
            case '4':
                cards[i].value = 4;
                break;
            case '3':
                cards[i].value = 3;
                break;
            case '2':
                cards[i].value = 2;
                break;
            default:
                cards[i].value = 0;
        }

    }


    // console.log('========')
    // for (i = 0; i < cards.length-1; i++){
    //   console.log(cards[i]);
    // }
    return cards.sort(function (a, b) {
        return a.value - b.value;
    });
}

function compare(res1, res2){

}



function cardGener() {
    var id="tableCards";
    var num = 9;
    var cards = ["HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK",
        "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK",
        "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK",
        "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK"
    ];

    var bi = [];
    for (var i = 0; i <= cards.length - 1; i++) {
        bi[i] = [];
        bi[i][0] = cards[i];
        bi[i][1] = true;
    }

    var sevenCards = [];
    var pl1 = [];
    var pl2 = [];

    var i = 0;
    document.getElementById(id).value = '';
    document.getElementById('p2Cards').value = '';
    document.getElementById('p1Cards').value = '';
    // var start = Date.now();
    while (sevenCards.length+pl1.length+pl2.length < num) {
        r = randomInteger(0, 51);
        if (bi[r][1] == true) {
            if(sevenCards.length+pl1.length+pl2.length < 5 ){
                sevenCards[sevenCards.length] = bi[r][0];
                document.getElementById(id).value += bi[r][0];
                document.getElementById(id).value += ' ';
            }else
            if(sevenCards.length+pl1.length+pl2.length < 7 ){
                pl2[pl2.length] = bi[r][0];
                document.getElementById("p2Cards").value += bi[r][0];
                document.getElementById("p2Cards").value += ' ';
            }
            else{
                pl1[pl1.length] = bi[r][0];
                document.getElementById("p1Cards").value += bi[r][0];
                document.getElementById("p1Cards").value += ' ';
            }


            bi[r][1] = false;
        }
        i++;
    }
    //addImgs(sevenCards)
    document.getElementById('p1Comb').value = '';
    document.getElementById('p1Comb').value = comb(sevenCards.concat(pl1));
    document.getElementById('p2Comb').value = '';
    document.getElementById('p2Comb').value = comb(sevenCards.concat(pl2));
    addImgsPvp(sevenCards, "table");
    addImgsPvp(pl1, "pl1C");
    addImgsPvp(pl2, "pl2C");
    console.log('+++++');
    return sevenCards;
}

function addImgsPvp(arr,id) {
    var element = document.getElementById(id);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for (var i = 0; i <= arr.length - 1; i++) {
        var newImg = document.createElement("img");
        newImg.src = "./cards/" + arr[i] + ".svg";
        newImg.id = arr[i];
        document.getElementById(id).appendChild(newImg);
    }
    return true;
}

function getCards() {

}

function longTest() {
    var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i <= 10000; i++) {
        result[sc()] += 1;
    }
    return result;
}


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function w(S) {
    var arr = [0, 0, 0, 0];
    for (var i = 0; i <= S - 1; i++) {
        var r = randomInteger(0, 3);
        arr[r] += 1;
    }
    arr[4] = arr[0] + arr[1] + arr[2] + arr[3];
    return arr;
}


function isFR(arr) {
    var countH = 0;
    var countD = 0;
    var countC = 0;
    var countS = 0;
    for(var i = 0 ; i < arr.length; i++){
        switch (arr[i].suit){
            case "hearts":
                countH += 1;
                break;
            case "diamonds":
                countD += 1;
                break;
            case "clubs":
                countC += 1;
                break;
            case "spades":
                countS += 1;
                break;
        }
    }
    if( countH >4 || countD > 4 || countC > 4 || countS >4){
        console.log(true);
        return true;
    }
    console.log(false);
    return false;

}
