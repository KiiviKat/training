// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },

  add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return items;
      }
    }

    product.quantity = 1;

    items.push(product);

    return items;
    // product.quantity = 1;
    // let isExist = false;
    // if (this.items.length !== 0) {
    //   for (let i = 0; i < this.items.length; i += 1) {
    //     if (product.name === this.items[i].name) {
    //       isExist = true;
    //       this.items[i].quantity += 1;
    //       break;
    //     }
    //   }
    // }
    // if (!isExist || this.items.length === 0) {
    //   this.items.push(product);
    // }
    // return this.items;
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (productName === items[i].name) {
        items.splice(i, 1);
        break;
      }
    }

    return items;
  },

  clear() {
    this.items = [];

    return this.items;
  },

  countTotalPrice() {
    let totalPrice = 0;

    for (const item of this.items) {
      totalPrice += item.price * item.quantity;
    }

    return totalPrice;
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name) {
        item.quantity += 1;
        break;
      }
    }

    return this.items;
  },
  decreaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name && this.items[i].quantity === 1) {
        this.items.splice(i, 1);
        break;
      } else if (productName === this.items[i].name && this.items[i].quantity !== 1) {
        this.items[i].quantity -= 1;
        break;
      }
    }

    return this.items;
  },
};

console.log(cart.getItems());

console.table(cart.add({ name: '🍎', price: 50 }));
console.table(cart.add({ name: '🍎', price: 50 }));
console.table(cart.add({ name: '🍋', price: 60 }));
console.table(cart.add({ name: '🍎', price: 50 }));
console.table(cart.add({ name: '🍇', price: 70 }));
console.table(cart.add({ name: '🍇', price: 70 }));

console.table(cart.remove('🍋'));

// console.log(cart.clear());

// console.log(cart.countTotalPrice());

// console.log(cart.increaseQuantity('🍎'));
// console.log(cart.increaseQuantity('🍎'));
// console.log(cart.increaseQuantity('🍋'));

// console.log(cart.decreaseQuantity('🍋'));
// console.log(cart.decreaseQuantity('🍋'));
// console.log(cart.decreaseQuantity('🍎'));
// console.log(cart.decreaseQuantity('🍎'));
// console.log(cart.decreaseQuantity('🍎'));
// console.log(cart.decreaseQuantity('🍎'));
// console.log(cart.decreaseQuantity('🍎'));
