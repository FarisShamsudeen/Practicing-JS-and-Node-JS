const cart = [
    { item: 'apple', price: 1, quantity: 3 },
    { item: 'banana', price: 2, quantity: 2 },
    { item: 'orange', price: 1.5, quantity: 4 }
  ];

  
  const totalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)

  console.log(totalPrice);