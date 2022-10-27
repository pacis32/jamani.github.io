const arrProducts = [
  {
    url: "#exampleModal1",
    title: "AE Super Soft Hooded Flannel Shacket",
    image: "./images/four.webp",
    category: "top",
    description: " new+ good quality",
    price: "34.99",
    id: 1,
    discount: " 20%",
  },
  {
    url: "#exampleModal2",
    title: "AEO Plastic Frame Aviator Sunglasses",
    image: "./images/sunglass.webp",
    category: "accessories",
    description: "Online only",
    price: "45.99",
    id: 2,
    discount: " 50%",
  },

  {
    url: "#",
    title: "AE Super Soft Hooded Flannel Shirt",
    image: "./images/hoody.webp",
    category: "top",
    description: "online only",
    price: "45.99",
    id: 3,
    discount: " 20%",
  },
  {
    url: "#",
    title: "AE Camo Baggy Cargo Jogger",
    image: "./images/bottom2.webp",
    category: "bottom",
    description: " this a nice quality",
    price: "45.99",
    id: 4,
    discount: " 20%",
  },
  {
    url: "#",
    title: "AEO Plaid Ultra Soft Boxer Short 3-Pack",
    image: "./images/bottom.webp",
    category: "bottom",
    description: " online only",
    price: "45.99",
    id: 5,
    discount: " 20%",
  },
  {
    url: "#",
    title: "AE Road Tripper Hat",
    image: "./images/hat2.webp",
    category: "accessories",
    description: " verrythis a nice quality",
    price: "45.99",
    id: 6,
    discount: " 50%",
  },
  {
    url: "#",
    title: "AE Super Soft Hooded Flannel Shacket",
    image: "./images/bottom1.webp",
    category: "bottom",
    description: " good+good Quality",
    price: "45.99",
    id: 7,
    discount: " 20%",
  },

  {
    url: "#",
    title: "AE Camo Baggy Cargo Jogger",
    image: "./images/socks.webp",
    category: "accessories",
    description: " new+ good quality",
    price: "40.99",
    id: 8,
    discount: " 30%",
  },
  {
    url: "#",
    title: "AE Super Soft Hooded Flannel Shacket",
    image: "./images/six.webp",
    category: "top",
    description: " good+good Quality",
    price: "49.99",
    id: 9,
    discount: " 20%",
  },
];

//need this to append
const productContainer = document.querySelector(".product-container");

const displayProducts = (
  urlValue,
  titleValue,
  categoryValue,
  imageValue,
  descriptionValue,
  priceValue,
  discountValue
) => {
  //create card
  const card = document.createElement("div");
  card.classList.add("card");
  //create href a
  const a = document.createElement("a");
  a.setAttribute("href", urlValue);

  //create category
  const category = document.createElement("div");
  category.classList.add("category");
  category.innerHTML = categoryValue;

  //create IMAGE
  const img = document.createElement("img");
  img.setAttribute("src", imageValue);

  //create title

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerHTML = titleValue;

  //create description

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = descriptionValue;

  //create info
  const info = document.createElement("div");
  info.classList.add("info");

  //crate a price

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerHTML = priceValue;

  //discount

  const discount = document.createElement("div");
  discount.classList.add("discount");
  discount.innerHTML = discountValue;

  //append element
  productContainer.appendChild(card);
  card.appendChild(a);
  a.appendChild(category);
  a.appendChild(img);
  a.appendChild(title);
  a.appendChild(description);
  a.appendChild(info);
  info.appendChild(price);

  info.appendChild(discount);
};

const generateData = () => {
  arrProducts.forEach((element) => {
    displayProducts(
      "model.html?ref=" + element.id,
      element.title,
      element.category,
      element.image,
      element.description,
      element.price,
      element.discount
    );
    console.log(element.discount);
  });
};

generateData();

// generate after
function generateDataAfter(data) {
    productContainer.innerHTML = "";
    data.forEach((element) =>{
        displayProducts(element.url,element.title, 
            element.category,element.image,
            element.description, element.price,
            element.discount)
            console.log(element.discount)
    });
}

//sorting functions

//sorting high to low
function sortingDescending(x,y){
    return parseFloat(x.price) - parseFloat(y.price);
}

function sortingByPriceLower() {
    return arrProducts.sort(sortingDescending);
}

// console.log( descending);


//row to high by price

function sortingAscending(a,b){
  return parseFloat(b.price) - parseFloat(a.price);
}

function sortingByPriceHigh() {
    return arrProducts.sort(sortingAscending);
}

//console.log(filterTops);


function getItemById(id) {
  for (let ele of arrProducts) {
    if (ele.id == id) {
      return ele;
    }
  }
  return null;
}
