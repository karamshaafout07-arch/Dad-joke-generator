// Selecting elements from the DOM
const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Initial joke fetch when the page loads
generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    // Fetching a joke from the API
    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeElement.innerHTML = data.joke;
        });
}

// Adding event listener to the button to fetch a new joke on click
jokeBtn.addEventListener('click', generateJoke);

        