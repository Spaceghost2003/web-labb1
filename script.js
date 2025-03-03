class Album{

    constructor(Cover, Artist, Title, Price){
        this.Cover = Cover;
        this.Artist = Artist;
        this.Title = Title;
        this.Price = Price;
    }


}



const album1 = new Album("imgs/img1.jpg", "Paysage D'hiver", "Kerker", "$75");
const album2 = new Album("imgs/img2.jpg","Paysage D'hiver", "Kelte", "$40");
const album3 = new Album("imgs/img3.jpg","Paysage D'hiver", "Ensamkeit", "$40");
const album4 = new Album("imgs/img4.jpg","Paysage D'hiver", "Skait", "$35");
const album5 = new Album("imgs/img5.jpg","Paysage D'hiver", "Die Festung", "$25");
const album6 = new Album("imgs/img6.jpg","Paysage D'hiver", "Mordung", "$40");
const album7 = new Album("imgs/img7.jpg","Paysage D'hiver", "Totenheim", "$40");
const album8 = new Album("imgs/img8.jpg","Paysage D'hiver", "Unheimlich", "$30");

const Albums = [album1,album2,album3,album4,album5,album6, album7,album8];


document.addEventListener("DOMContentLoaded", () => {
    const productContent = document.querySelector(".product-content"); 
    
    if (!productContent) {
        console.error("Element with class 'product-content' not found.");
        return;
    }

    console.log("Product content found:", productContent);
    console.log("Albums array:", Albums);
    Albums.forEach(function(album) {
        const productBox = document.createElement("div");
        productBox.className = "product-box";
        productBox.innerHTML = `
            <div class="img-box">
                <img src="${album.Cover}" alt="${album.Artist} - ${album.Title}">
            </div>
            <h2 class="product-title">${album.Artist} - ${album.Title}</h2>
            <div class="price-and-cart">
                <span class="price">${album.Price}</span>
                <i class="ri-shopping-bag-line add-cart"></i>
            </div>
        `;

        productBox.className="product-box";
        productContent.appendChild(productBox);
        console.log("is this working?");
    });

    console.log("It worked");
    const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

console.log("test");
const addCartButtons = document.querySelectorAll(".add-cart")

addCartButtons.forEach(button =>{
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    });
});
});





const cartContent = document.querySelector(".cart-content");
const addToCart = productBox =>{
    console.log("added");
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

   
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = 
    `
                <img src="${productImgSrc}" class="cart-img">
            <div class="cart-detail">
                <h2 class="cart-product-title">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                <div class="cart-quantity">
                    <button id="decrement">-</button>
                    <span class="number">1</span>
                    <button id="increment">+</button>
                </div>
            </div>
            <i class="ri-delete-bin-line cart-remove"></i>`;

            cartContent.appendChild(cartBox);
            cartBox.querySelector(".cart-remove").addEventListener("click", ()=>{
                cartBox.remove();
                updateTotalPrice();
            });

            cartBox.querySelector(".cart-quantity").addEventListener("click", event =>{
                const numberElement = cartBox.querySelector(".number");
                const decrementButton = cartBox.querySelector("#decrement");
                let quantity = numberElement.textContent;
                if(event.target.id ==="decrement" && quantity > 1){
                    quantity--;
                    if(quantity===1){
                        decrementButton.style.color= "#999"; 
                        updateTotalPrice();
                    }
                }else if(event.target.id=== "increment"){
                    quantity++;
                    decrementButton.style.color="#333";
                }

               
                numberElement.textContent = quantity;
                updateTotalPrice();
            });
            updateTotalPrice();
};

const updateTotalPrice= () =>{
const totalPriceElement = document.querySelector(".total-price");
const cartBoxes = cartContent.querySelectorAll(".cart-box");
let total = 0;
cartBoxes.forEach(cartBox =>{
    const priceElement = cartBox.querySelector(".cart-price");
    const quantityElement = cartBox.querySelector(".number");
    const price = priceElement.textContent.replace("$", "");
    const quantity = quantityElement.textContent;
    total += price * quantity;
});
totalPriceElement.textContent = `$${total}`;
};






