// driver karam
// navigator Zadia, Ahm, Fiorella

const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke ();

function generateJoke () {
    const  config = { 
        headers: {
            accept: "application/json", 

            
        },

    };

    fetch ("https://icanhazdadjoke.com/",config)
    .then (res => res.json())
    .then (data => {
        jokeElement.innerHTML = data.joke; 
    });




}

jokeBtn.addEventListener("click", generateJoke);