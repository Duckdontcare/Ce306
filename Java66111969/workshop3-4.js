let product = [
    {
        price : 150,
        discount : 0.05
    },
    {
        price : 100,
        discount : 0.1
    },
    {
        price : 500,
        discount : 0.15
    },
    {
        price : 450,
        discount : 0.2
    },
    {
        price : 300,
        discount : 0.3
    },
];

function caltotal(){
    let totalPrice = 0
    product.forEach(products => {
        const discountedPrice = products.price - (products.price * products.discount);
        totalPrice += discountedPrice;
    })

    console.log(`Total price after discount : ${totalPrice}`)

};

caltotal();