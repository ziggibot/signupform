
const passwordEntry = document.getElementById("passw");
const passwordRepeat = document.getElementById("passw_conf");


passwordEntry.addEventListener('focusout', validatePassword);
passwordRepeat.addEventListener('keyup', validatePassword);


function validatePassword() {
    let password = document.getElementById("passw").value;
    let passwordconfirm = document.getElementById("passw_conf").value;
    if(password != passwordconfirm) {
        document.getElementById("passw").style.border = "0.2em red solid";
        document.getElementById("passw_conf").style.border = "0.2em red solid";
    } else {
        document.getElementById("passw").style.border = "0.2em green solid";
        document.getElementById("passw_conf").style.border = "0.2em green solid";
    }
}