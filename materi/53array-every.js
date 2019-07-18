let products=[
    {name :"Aplle", type: "fruit"},
    {name :"Monitor", type: "Computer"},
    {name :"Mango", type: "fruit"},
    {name :"Table", type: "furniture"}
];

// menghasilkan false karena didalam products tidak hanya ada fruit
console.log(
    products.every(product=>product.type==="fruit")
);