console.log("🍨")


let iceCream = [{
  name: 'Chocolate',
  price: 1.25,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1.25,
  quantity: 0
}]

let toppings = [{
  name: 'Sprinkles',
  price: .25,
  quantity: 0
},
{
  name: 'Cherry on Top',
  price: .25,
  quantity: 0
},
{
  name: 'Lil Cookies',
  price: .5,
  quantity: 0
}]

let vessels = [{
  name: 'Waffle Cone',
  price: 3.00,
  quantity: 0
},
{
  name: 'Bowl',
  price: 4.00,
  quantity: 0
},
{
  name: 'Bowl and Cone',
  price: 5.00,
  quantity: 0
}]

let items = [...iceCream, ...toppings, ...vessels]

// NOTE finds and increments (deprecated addIceCream)
// function addIceCream(itemName) {
//   for (let i = 0; i < iceCream.length; i++) {
//     let iceCreamFlavor = iceCream[i]

//     if (iceCreamFlavor.name == itemName) {
//       iceCreamFlavor.quantity += 1
//       console.log("1️⃣", iceCreamFlavor.name, iceCreamFlavor.quantity)
//     }
//   }
//   drawCart()
// }

// NOTE split this out to add and find functions
function addItem(itemName) {
  let addedItem = findItem(itemName)

  addedItem.quantity += 1

  drawCart()
}

function removeItems(itemName) {
  let removedItem = findItem(itemName)
  removedItem.quantity -= 1
  drawCart()
}

function findItem(itemName) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i]

    if (item.name == itemName) {
      return item
    }
  }
}

function drawCart() {
  console.log("🫣", items)

  let order = ''
  let cartTotal = 0

  for (let i = 0; i < items.length; i++) {
    let item = items[i]

    if (item.quantity > 0) {
      order +=
        `<p class="bold">${item.name} <button class="text-right" onclick="removeItems('${item.name}')"><i class="mdi mdi-delete-circle "></i></button></p>
        <p>x ${(item.quantity)} cost is <i class="mdi mdi-currency-usd"></i>${(item.price * item.quantity).toFixed(2)}</p>`

      cartTotal += (item.quantity * item.price)
      console.log("2️⃣", cartTotal);
    }

    let orderContents = document.getElementById("orderContents")
    orderContents.innerHTML = `${order}`

    let totalCart = document.getElementById("totalCart")
    totalCart.innerHTML = `$${cartTotal.toFixed(2)}`
  }
  toggleCart(cartTotal)
}

function checkout() {
  items.forEach((item) => {
    item.quantity = 0
    console.log('🍻', item);
  })
  drawCart()
}

// function toggleCart() {
//   for (let i = 0; i < items.length; i++) {
//     let item = items[i]
//     if (item.quantity == 0) {
//       revealCart()
//     } else
//       hideCart()
//   }
// }

function toggleCart(cartTotal) {
  if (cartTotal !== 0) {
    console.log(cartTotal, "not 0")
    revealCart()
  } else {
    console.log(cartTotal, "0")
    hideCart()
  }
}

function revealCart() {
  document.getElementById("receipt").classList.remove("d-none")
}

function hideCart() {
  document.getElementById("receipt").classList.add("d-none")
}