function setCookies(name) {
    if(name === '') return;
    //var passw = $("#passw").value;
    document.cookie = "userName=" + name + "; path=/";

    //document.cookie = "passWord=" + passw + "; path=/";
    console.log(document.cookie);
}
var t = '';

function log_in() {
    //document.getElementById("logged_in").style.display="block";
    //document.getElementById("login_form").style.display="none";
    valid();
    document.getElementById("hello_usr").innerHTML= t +"!";
}
 var x = document.getElementById("subm_log");
x.addEventListener("click", setCookies(t));
x.addEventListener("click", log_in);

function get_value(a) {
    return a.value;
}

function logout() {
    document.cookie = "userName=; path=/";
    location.reload();
    document.getElementById("logged_in").style.display="none";
    document.getElementById("login_form").style.display="block";
    document.getElementById("usrname").value="";
    document.getElementById("passw").value="";
}

function valid() {
if((document.cookie.split('=')[0] == 'userName')&&(document.cookie.split('=')[1]!="")) {
    t = document.cookie.split('=')[1];
    document.getElementById("logged_in").style.display="block";
    document.getElementById("hello_usr").innerHTML= t + "!";
    document.getElementById("login_form").style.display="none";

} else {
    document.getElementById("login_form").style.display="block";
    document.getElementById("logged_in").style.display="none";
}
}
valid();