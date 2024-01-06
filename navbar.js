

function menuOn(){
    let menu = document.getElementById("menu-icon");
let close_menu = document.getElementById("menu-icon-close");

    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    menu.style.display ="none";
    
};

function hideSidebar(){
    let menu = document.getElementById("menu-icon");
    let close_menu = document.getElementById("menu-icon-close");
    let hide_sidebar = document.querySelector(".sidebar");
    hide_sidebar.style.display = 'none';
    menu.style.display ="block";
};


