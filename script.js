/*
fetch () method: it is defined on the window object,
which we can use to perform request
The request will return a promise
Promise will either be fullfilled or rejected

*/
// async function getProducts() {
//   try {
//     let response = await fetch(`https://fakestoreapi.com/products`);
//     let prod = await response.json();
//     console.log(prod);
//     // return prod;
//   } catch (err) {
//     console.log(err);
//   }

//   async function displayProducts() {
//     let container = document.querySelector(".container");
//     let products = await getProducts();
//     // return products;
//     console.log(products);

//     products.array.forEach((element) => {
//       let div = document.createElement("div");
//       div.classList.add("product");
//       div.innerHTML += `<h2>${element.title}</h2>`;
//       div.innerHTML += `<img src="${element.image}">`;
//       div.innerHTML += `<p>Price : ${element.price}</p>`;
//       div.innerHTML += `<button onclick="buyProduct(${element.id})`;
//     });
//   }
// }

// const productList = document.getElementById("productList");

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((product) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h3>${product.title}</h3>
//         <img src="${product.image}" alt="${product.title}" />
//         <p>$${product.price}</p>
//         <p>${product.description}</p>
//       `;
//       productList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const products = document.getElementById("products");

// async function getProducts() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
//     let product = await response.json();
//                 console.log(product);

//     product.forEach((product) => {
//       let div = document.createElement("div");
//       div.classList.add("product");
//       div.innerHTML = `
//         <h2> CATEGORY: ${product.category}</h2>
//         <h3>${product.title}</h3>
//         <img src="${product.image}" alt="${product.title}" />
//         <p>PRICE: $${product.price}</p>
//         <p class="desc"> DESCRIPTION: ${product.description}</p>
//         <h5> Rating: ${product.rating.rate} <br> Count: ${product.rating.count}</h5>

//  <button>More</button>`;
//       products.appendChild(div);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getProducts();

var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");
sidenav.style.right = "-250px";

menubtn.onclick = function () {
  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0px";
    menu.src = "close.png";
  } else {
    sidenav.style.right = "-250px";
    menu.src = "menu.png";
  }
};

let time = document.getElementById("current-time");
setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

const products = document.getElementById("products");

let cart = []
let cartCounter = document.querySelector(".cart-counter")
cartCounter.innerText = cart.length
async function getProducts() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let product = await response.json();
    console.log(product);

    product.forEach((product) => {
      let div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <h2>CATEGORY: ${product.category}</h2>
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" />
        <p>PRICE: $${product.price}</p>
        <p class="desc"> DESCRIPTION: ${product.description}</p>
        <h5>Rating: ${product.rating.rate} <br> Count: ${product.rating.count}</h5>

        <button class="moreBtn">ADD TO CART</button>`;
      products.appendChild(div);

      let button = div.querySelector(".moreBtn");
      let cartCOunter = document.querySelector(".cart-counter");

      let count = 0;


      function addToCart(product) {
        //check if it is in cart
        let existsInCart = cart.find(item => item.id == product.id);
        if(existsInCart) {
          product.quantity = existsInCart.quantity +1
          console.log(cart);
        }
        else{
          product.quantity = 1;
           cart.push(product);
           cartCOunter.innerText = cart.length;
           console.log(cart);
        }
       



        // count = 0;

        console.log(count);
      }

      button.addEventListener("click", ()=>{addToCart(product)})
      // addToCart()

    
    });
  } catch (err) {
    console.log(err);
  }
}

getProducts();

// const products = document.getElementById("products");

// async function getProducts() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
//     let product = await response.json();
//     console.log(product);

//     product.forEach((product) => {
//       let div = document.createElement("div");
//       div.classList.add("product");
//       div.innerHTML = `
//         <h2>CATEGORY: ${product.category}</h2>
//         <h3>${product.title}</h3>
//         <img src="${product.image}" alt="${product.title}" />
//         <p>PRICE: $${product.price}</p>
//         <p class="desc"> DESCRIPTION: ${product.description}</p>
//         <h5>Rating: ${product.rating.rate} <br> Count: ${product.rating.count}</h5>

//         <button class="moreBtn" id="${product.id}">More</button>`;
//       products.appendChild(div);

//       let button = div.querySelector(".moreBtn");

//       button.addEventListener("click", function (e) {
//         window.open(`product.html?id=${product.id}`, "_blank");
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getProducts();
