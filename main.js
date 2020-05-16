//get hold of the div with the class inside-container

const div1 = document.querySelector('div .inside-container');

//Get hold of the form input and value
const form = document.querySelector('.search');
const formValue = form.id.value.trim();

//create async function and connect to pokemon api and fetch data

const fetchPokemon = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/26`); //need to make the url load data dynamically
    let data = await res.json();

    return data;
};
//use then method to extract data from the api results and output data to DOM

fetchPokemon()
.then((data) => {
    console.log(data);
    //use destructuring on the data object to access results more easily

    const {id,name, height, weight} = data;

    //create a html template string and assign the destructed values inside the template string

    let html = `
    <p>Id:${id}</p><hr>
    <p>Name: ${name}</p><hr>
    <p>Height: ${height}</p><hr>
    <p>Weight: ${weight}</p><hr>
    <img src="${data.sprites.front_default}">

`;

//place the html template string inside the div1 which has a class of inside-container

div1.innerHTML = html;

})
