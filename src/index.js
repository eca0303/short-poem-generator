function generatePoem(event) {
    event.preventDefault();

    
    new Typewriter("#poem", {
      strings: "A friend is like a star that twinkles and glows",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);