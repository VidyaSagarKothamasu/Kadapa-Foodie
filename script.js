let cart = [];
let total = 0;

function displayRestaurants(data = restaurants) {
  const container = document.getElementById("restaurants");
  container.innerHTML = "";

  data.forEach((rest) => {
    const div = document.createElement("div");
    div.className = "restaurant-card";
    div.innerHTML = `
      <div class="image-wrapper">
        <img src="${rest.image}" alt="${rest.name}">
        <div class="restaurant-name">${rest.name}</div>
      </div>
      <div class="restaurant-info">
        <p>${rest.cuisine}</p>
        <p class="rating">⭐ ${rest.rating} • ${rest.time} mins</p>
        <button onclick="showMenu(${rest.id})">View Menu</button>
        <div id="menu-${rest.id}"></div>
      </div>
    `;
    container.appendChild(div);
  });
}

function showMenu(id) {
  const rest = restaurants.find((r) => r.id === id);
  const menuDiv = document.getElementById("menu-" + id);
  menuDiv.innerHTML = "";

  rest.menu.forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
      </div>
    `;
    menuDiv.appendChild(card);
  });
}

function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("active");
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
  });
  document.getElementById("total").innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    alert("Order placed successfully!");
    cart = [];
    total = 0;
    updateCart();
  }
}

window.onload = () => displayRestaurants();
