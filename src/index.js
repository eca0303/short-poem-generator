function displayPoem(response) {
     console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });

}
function generatePoem(event) {
    event.preventDefault();

    // Build API URL 
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "370ab147d13obce21d786caff668ftb9";
    let context = "You are a creative poem expert. Generate a 4-line HTML-formatted poem only using <br> tags, and do not wrap it in code blocks or Markdown. Make sure to follow the user instructions. Do not include title in poems. Sign the Poem SheCodes AI in bold inside a <strong> element on the last line.";
    let prompt = `User instructions: Generate a Short poem about ${instructionsInput.value}`;
    let apiUrl =
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳Generating a Short poem about ${instructionsInput.value}</div>`;
    
    console.log("Generating Poem")
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    // Make a call to th API
    axios.get(apiUrl).then(displayPoem);

    // Display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);