console.log("🍨")


let iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

let toppings = [{
  name: 'Sprinkles',
  price: .25,
  quantity: 0
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]



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
function addIceCream(itemName) {
  let addedItem = findIceCream(itemName)

  addedItem.quantity += 1

  drawCart()
}

function removeItems(itemName) {
  let removedItem = findIceCream(itemName)
  removedItem.quantity -= 1
  drawCart()
}

function findIceCream(itemName) {
  for (let i = 0; i < iceCream.length; i++) {
    let iceCreamFlavor = iceCream[i]

    if (iceCreamFlavor.name == itemName) {
      return iceCreamFlavor
    }
  }
}

function drawCart() {
  console.log("🫣")

  let order = ''
  let cartTotal = 0

  for (let i = 0; i < iceCream.length; i++) {
    let iceCreamFlavor = iceCream[i]

    if (iceCreamFlavor.quantity > 0) {
      order +=
        `<p class="bold">${iceCreamFlavor.name} <button class="text-right" onclick="removeItems('${iceCreamFlavor.name}')"><i class="mdi mdi-delete-circle "></i></button></p>
        <p>x ${(iceCreamFlavor.quantity).toFixed(2)} cost is <i class="mdi mdi-currency-usd"></i>${(iceCreamFlavor.price * iceCreamFlavor.quantity).toFixed(2)}</p>`

      cartTotal += (iceCreamFlavor.quantity * iceCreamFlavor.price)
      console.log("2️⃣", cartTotal);
    }

    let orderContents = document.getElementById("orderContents")
    orderContents.innerHTML = `${order}`

    let totalCart = document.getElementById("totalCart")
    totalCart.innerHTML = `$${cartTotal.toFixed(2)}`
  }
}

function checkout() {
  iceCream.forEach((iceCreamFlavor) => {
    iceCreamFlavor.quantity = 0
    console.log('🍻', iceCreamFlavor);
  })
  drawCart()
}