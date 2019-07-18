people = [{
    name: "Budi",
    gender: "male"
},
{
    name: "Ani",
    gender: "female"
},
{
    name: "Harjo",
    gender: "male"
},
{
    name: "Yanti",
    gender: "female"
}];


// Perhatikan seksama
let female = people.filter(person => {
   return person.gender==="female"; 
});

console.log(female);