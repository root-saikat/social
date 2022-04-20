var settingsmenu = document.querySelector(".settings-menu");
var drkbtn = document.getElementById("drkbtn");

function settingsmenutoggle(){
    settingsmenu.classList.toggle("settings-menu-height"); 
}

drkbtn.onclick = function(){
    drkbtn.classList.toggle("drkbtn-on");
    document.body.classList.toggle("drk-theme");
}