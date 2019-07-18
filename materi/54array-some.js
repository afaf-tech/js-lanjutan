let products=[
    {name :"Aplle", type: "fruit"},
    {name :"Monitor", type: "Computer"},
    {name :"Mango", type: "fruit"},
    {name :"Table", type: "furniture"}
];

// menghasilkan true karena didalam products sudah ada salah satu dari kriteria
console.log(
    products.some(product=>product.type==="fruit")
);