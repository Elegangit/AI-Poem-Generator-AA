function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "130f33ffoc5t4fdc244afb86281fdf02";
    let prompt = `User's instructions: Generate a poem about ${instructionsInput.value}`;
    let context = "You are a poem expert and love to write short poems on planets, moon, stars and sun. Your mission is to generate a four line poem in basic HTML and seperate each line with a <br />. Then translate the poem from English to Arabic, Russian, French and Turkish in a separate paragraphs if possible. Title to the poem at the top is Universe Explored through Poems. Have a complimentary close only at the end of the poem with a <strong> element 'SheCodes AI'. Please precisely follow the user's instructions. ";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating an English poem about universe ${instructionsInput.value} with an Arabic, Russian, French and Turkish translations.</div>`;

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
