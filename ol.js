function addToCart(product, img){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name: product, image: img});
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count only
    document.getElementById("cartCount").innerText = cart.length;
}

function showDetails(name,price,img){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popupTitle").innerText=name;
    document.getElementById("popupPrice").innerText=price;
    document.getElementById("popupImg").src=img;
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

function searchProduct(){
    let input=document.getElementById("search").value.toLowerCase();
    let cards=document.querySelectorAll(".card");

    cards.forEach(card=>{
        let title=card.querySelector(".title").innerText.toLowerCase();
        if(title.includes(input))
            card.style.display="block";
        else
            card.style.display="none";
    });
}