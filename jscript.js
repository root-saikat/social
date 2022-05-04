var settingsmenu = document.querySelector(".settings-menu");
var drkbtn = document.getElementById("drkbtn");

function settingsmenutoggle(){
    settingsmenu.classList.toggle("settings-menu-height"); 
}

drkbtn.onclick = function(){
    drkbtn.classList.toggle("drkbtn-on");
    document.body.classList.toggle("drk-theme");
}



// messenger
var messengerui = document.querySelector(".messenger-ui");

function messengeruitoggle(){
    messengerui.classList.toggle("messenger-ui-height"); 
}
