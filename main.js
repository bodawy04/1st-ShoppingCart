var cartList = document.querySelector(".cartItemsDis");
var cartCounter = document.querySelector("#cnt");

function addToCart(event) {
  var element = event.target.parentNode.parentNode.parentNode;
  var cartItem = document.createElement("li");
  //images
  var imgSrc = element.querySelector(".item-img").src;
  var img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  img.setAttribute("class", "item-img");
  cartItem.appendChild(img);
  //item names
  var itemName = element.querySelector(".itemName").innerHTML;
  var name = document.createElement("span");
  name.innerHTML = itemName;
  cartItem.appendChild(name);
  //item price
  var itemPrice = element.querySelector(".itemPrice").innerHTML;
  var priceValue = parseFloat(itemPrice);
  var price = document.createElement("span");
  price.innerHTML = priceValue.toFixed(2);
  cartItem.appendChild(price);
  //removing quantity
  var minus = document.createElement("button");
  minus.setAttribute("class", "addRmv");
  minus.innerHTML = "-";
  minus.addEventListener("click", minusQty);
  cartItem.appendChild(minus);
  // quantity counter
  var quantity = document.createElement("span");
  quantity.setAttribute("class", "qty");
  quantity.innerHTML = 1;
  cartItem.appendChild(quantity);
  //adding quantity
  var plus = document.createElement("button");
  plus.setAttribute("class", "addRmv");
  plus.innerHTML = "+";
  plus.addEventListener("click", plusQty);
  cartItem.appendChild(plus);

  cartList.appendChild(cartItem);

  cartCounter.innerHTML = parseInt(cartCounter.innerHTML) + 1;
}

var toCart = document.querySelectorAll(".addToCart");
toCart.forEach(function (button) {
  button.addEventListener("click", addToCart);
});

function minusQty(event) {
  var minusQnt = event.target.parentNode;
  var rmvQnt = minusQnt.querySelector(".qty");
  if (rmvQnt.innerHTML == 1) {
    minusQnt.remove();
    cartCounter.innerHTML = parseInt(cartCounter.innerHTML) - 1;
  } else {
    rmvQnt.innerHTML = rmvQnt.innerHTML - 1;
  }
}

function plusQty(event) {
  var plusQnt = event.target.parentNode;
  var addQnt = plusQnt.querySelector(".qty");
  addQnt.innerHTML = parseInt(addQnt.innerHTML) + 1;
}

var icon = document.querySelector("#cartIcon");
var side = document.querySelector(".rightSide");
var check = true;

icon.addEventListener("click", function () {
  if (check) {
    cartList.classList.remove("cartItemsNoDis");
    side.classList.add("rsclicked");
    check = false;
    console.log(check);
  } else if (!check) {
    cartList.classList.add("cartItemsNoDis");
    cartList.classList.remove("cartItemsDis");
    side.classList.remove("rsclicked");
    check = true;
    console.log(check);
  }
});
