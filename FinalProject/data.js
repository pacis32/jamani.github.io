function saveCartData(newData) {
    window.localStorage.setItem("cartData", JSON.stringify(newData));
}

function getCartData() {
    let data = window.localStorage.getItem("cartData");

    if(!data){
        return [];
    }

    return JSON.parse(data);
}