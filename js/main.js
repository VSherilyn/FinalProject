/**
 * Created by Vinea on 20.03.16.
 */
function request(url, type, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    xhr.addEventListener("load", function () {
        if (xhr.status === 404) { // 304 - not modified
            document.innerHTML = xhr.status + ': ' + xhr.statusText;
        } else {
            if(callback) {
                callback(JSON.parse(xhr.responseText));
            }
        }
    });
}

function createTable(comp) {
    var tabl = '';
    request('http://localhost:3000/tabledata/', 'GET', null, function(values) {
        values.sort(comp);
        for (var i = 0; i < values.length; i++) {
            tabl += '<tr>' + '<td>' + values[i].service + '</td>'
                 + '<td>' + values[i].discount + '%' + '</td>'
                 + '<td>' + values[i].price + '$' + '</td>' + '</tr>';
        }
        document.getElementById('taaable').innerHTML = tabl;
    });
}
createTable();

function compareS(a, b) {
    return a.service.localeCompare(b.service);
}
function compareS1(a, b) {
    return b.service.localeCompare(a.service);
}
function sortingS1() {
    createTable(compareS1);
    document.getElementById('first').innerHTML = '<button class="sort" onclick="sortingS()"><</button> Service';
}
function sortingS() {
    createTable(compareS);
    document.getElementById('first').innerHTML = '<button class="sort1" onclick="sortingS1()"><</button> Service';
}

function compareD(a, b) {
    return a.discount - b.discount;
}
function sortingD() {
    createTable(compareD);
    document.getElementById('second').innerHTML = '<button class="sort1" onclick="sortingD1()"><</button> Discount';
}
function compareD1(a, b) {
    return b.discount - a.discount;
}
function sortingD1() {
    createTable(compareD1);
    document.getElementById('second').innerHTML = '<button class="sort" onclick="sortingD()"><</button> Discount';
}

function compareP(a, b) {
    return a.price - b.price;
}
function sortingP() {
    createTable(compareP);
    document.getElementById('third').innerHTML = '<button class="sort1" onclick="sortingP1()"><</button> Price';
}
function compareP1(a, b) {
    return b.price - a.price;
}
function sortingP1() {
    createTable(compareP1);
    document.getElementById('third').innerHTML = '<button class="sort" onclick="sortingP()"><</button> Price';
}
