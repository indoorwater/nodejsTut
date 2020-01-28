// object property shorthand

const name = "A-Dog"
const age = 24


const user = {
    name,
    age,
    location: "Bendigo"

}

console.log(user)

//object destructuring 

const product = {
    label: 'Red Note Book',
    price: 3,
    stock: 201,
    salePrice: true
}

// Old method
//const label = product.label
//const stock = product.stock

//new method
// const{label, stock, price, salePrice:onSale, rating = 5} = product 

// console.log("label: " + label)
// console.log("stock: " + stock)
// console.log("onSale: " + onSale)
// console.log("rating: " + rating)


const transaction = (type, {label, stock, price, salePrice:onSale, rating = 5}) => {

    console.log("label: " + label)
    console.log("stock: " + stock)
    console.log("onSale: " + onSale)
    console.log("rating: " + rating)

}
transaction("order", product)