let searchBtn = document.querySelector(".search-icon");

searchBtn.addEventListener("click", () => {

    let input = document.querySelector(".search-input").value;

    if(input === ""){
        alert("Please enter something");
    }
    else{
        alert("You searched for: " + input);
    }
});

let cart = document.querySelector(".nav-cart");

cart.addEventListener("click", () => {
    alert("Cart opened");
});

let backTop = document.querySelector(".foot-panel1");

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        let title = box.querySelector("h2").innerText;

        alert(title + " section opened");

    });

});