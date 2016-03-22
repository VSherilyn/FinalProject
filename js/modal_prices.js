/**
 * Created by Vinea on 21.03.16.
 */
function calc() {
    var arrival = Date.parse(document.getElementsByClassName('arr')[0].value),
        depart = Date.parse(document.getElementsByClassName('dep')[0].value);

    return (depart - arrival)/1000/60/60/24;
}

function rooms() {
    var room = document.getElementsByClassName('choose_r')[0].value;
    switch (room) {
        case 'ssr': return 60;
        case 'sup_sr': return 80;
        case 'sdr': return 100;
        case 'sup_dr': return 120;
        case 'fam_r': return 160;
        case 'vip_r': return 200;
    }
}

function price() {
    document.getElementById('modalbody').innerHTML = calc()*rooms() + '$';
}

function dates() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if( dd < 10) {
        dd = '0' + dd;
    }
    if(mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    var d = new Date();
    var tomorrow = d.getFullYear() + '-0' + (d.getMonth() + 1) + '-' + (d.getDate()+1);
    $(".arr").attr("min", today);
    $(".arr").attr("value", today);
    $(".dep").attr("min", tomorrow);
    $(".dep").attr("value", tomorrow);
}
dates();