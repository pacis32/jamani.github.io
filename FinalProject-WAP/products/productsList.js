
"use strict"
const arrProducts=[
    {
        name: "AE Super Soft Flannel Shirt",
        category: "tops",
        quantity: 3,
        image: "<img class='card-img-top' name='shirt1' src='./images.first.jpg' alt='Card image cap' >",
        rating: "<img src='./images/rating.png' alt='Card image cap'>",
        price: 18.49,
        ratingNum: 4,
        id: 'top1'

},
{
    name: "AE AirFlex+ Skinny Jeans",
    category: "bottom",
    quantity: 1,
    image: "<img class='card-img-top' name='jeans1' src='./images/jeans.png' alt='Card image cap' >",
    rating: "<img src='./images/rating.png' alt='Card image cap'>",
    price: 18.49,
    ratingNum: 4,
    id: 'bottom1'

},

]

function buildList(arrProducts){

    let myDiv=document.createElement("div")
    myDiv.id="myDiv"
    document.body.append(myDiv)
    for(let items of arrProducts){
        
    }

}