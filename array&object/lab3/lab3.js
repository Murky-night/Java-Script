console.log("Labwork 3");

const p1 = {
    name: "Bottle",
    price: 100,
    inStock: true
}

const p2 = {
    name: "Clock",
    price: 110,
    inStock: false
}

const p3 = {
    name: "Pencil",
    price: 120,
    inStock: true
}

const p4 = {
    name: "Laptop",
    price: 130,
    inStock: false
}

const p5 = {
    name: "Jacket",
    price: 140,
    inStock: false
}

const products = [p1, p2, p3, p4, p5];

console.log("================================================");

console.log("1.",p1.name);

console.log("================================================");

p2.price = 150
console.log("2. List of products:",products);

console.log("================================================");

const p6 = {
    name: "Shirt",
    price: 160,
    inStock: true
}

products.push({
    name: "Shirt",
    price: 160,
    inStock: true
})
console.log("3. Add new products:",products);

console.log("================================================");

products.pop();

console.log("4. Delete last product:",products);

console.log("================================================");

console.log("5. Names of products:");
products.forEach(item => {
    console.log(item.name);
})

console.log("================================================");

console.log("6. Prices of products:");
const prices = products.map((item) => {
    return item.price;
})

console.log(prices);

console.log("================================================");

console.log("7. Product in stock:");
const isAvailable = products.filter((item) => {
    return item.inStock === true;
})

// isAvailable.forEach(item => {
//     console.log(item);
// });

isAvailable.forEach(item => {
    console.log(item.name);
});

console.log("================================================");

console.log("8. First product:");
for (const key in p1) {
    console.log(key,"=", p1[key]);
}