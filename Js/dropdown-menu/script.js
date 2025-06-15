document.querySelectorAll(".dropdown").forEach(dropdown=>{
    const button=dropdown.querySelector(".dropdown-button");
    const menu=dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click",()=>{
        menu.classList.toggle("visible");
    });
    document.addEventListener("click",(e)=>{
        if(!dropdown.contains(e.target)){
            menu.classList.remove('visible');
        }
    });
});