
function generateCart() {
    let cartProductElements = [];

    let cartProducts = getCartData(); // give cart data in list
    let totalProducts = cartProducts.length;
    let totalPrice = 0;

    for (let item of cartProducts) {
        let productElement = getCartItem(item);
        totalPrice += parseFloat(item.price);
        cartProductElements.push(productElement);
    }

    let cartDiv = document.getElementById("cartDiv");

    cartDiv.innerHTML = "";
    if (cartProducts.length == 0) {
        return cartDiv.innerHTML = "<div style=\"width:280px\">Empty Cart</div>"
    }

    let buyButton = document.createElement("button");
    buyButton.innerHTML = "CheckOut";
    let hr = document.createElement("hr");
    buyButton.onclick = function(event){    
        event.preventDefault();
        handleBuyButtonClick();
    }
    cartDiv.append(...cartProductElements,hr,buyButton);
    
}


function getCartItem(item) {
    let img = document.createElement("img");
    let imgBox = document.createElement("div");
    let eleTitle = document.createElement("div");
    let elePrice = document.createElement("div");
    let detailBox = document.createElement("div");
    let removeButton = document.createElement("button");
    
    //Remaing to add event handler;
    let mainContainer = document.createElement("div");
    mainContainer.style.display = "flex";
    mainContainer.style.width = "280px";

    imgBox.style.height = "100px";
    imgBox.style.minWidth = "100px";

    img.style.height = "100%";
    img.setAttribute("src", item.image);
     

    eleTitle.style.fontWeight = "bold";
    eleTitle.style.fontSize="16px"
    eleTitle.innerText = item.title;

    elePrice.innerHTML = "$" + item.price;
    elePrice.style.fontSize="14px";
    elePrice.style.color="red";

    removeButton.innerHTML = "Remove";
    removeButton.style.fontSize="12px";
    removeButton.style.color="white";
    removeButton.style.background="red";
    removeButton.style.padding="5px";
    removeButton.onclick = function (event) {
        event.preventDefault();
        handleCartProductRemoval(item);
    }

    imgBox.append(img);
    detailBox.append(eleTitle, elePrice, removeButton);

    mainContainer.append(imgBox, detailBox);

    return mainContainer;

}

function handleCartProductRemoval(item) {
    if (item === null) {
        return;
    }
    let allProducts = [...getCartData()];
    let productIndex = allProducts.findIndex(p => p.id == item.id);
    if (productIndex < 0) {
        return;
    }
    allProducts.splice(productIndex, 1);
    saveCartData(allProducts);
    setCartProductsCount();
    generateCart();
}


function setCartProductsCount() {
    let totalProducts = getCartData().length;
    document.querySelector("#cartButton button span").innerText = totalProducts===0?"":totalProducts;
}


function handleAddToCart(item) {
    
    if (item === null) {
        return;
    }
    let allCartProducts = [...getCartData()];
    allCartProducts.push(item);
    saveCartData(allCartProducts); // Save new list(array) of cart products
    setCartProductsCount();
    generateCart();
}

function handleBuyButtonClick(){
    saveCartData([]);
    setCartProductsCount();
    generateCart();
 
}