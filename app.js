document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('text-container');

    const phrase =
        "Like an author weaving tales from beginning to end, a full-stack developer scripts digital stories, harmonizing the dance of data and design in every line of code.";

    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Split words and then letters
    const splitWords = (phrase) => {
        const words = phrase.split(" ");
        const elements = [];

        words.forEach((word) => {
            const wordElement = document.createElement('p');
            splitLetters(word).forEach((letterElement) => {
                wordElement.appendChild(letterElement);
            });
            elements.push(wordElement);
        });

        return elements;
    };

    const splitLetters = (word) => {
        const letters = word.split(" ");
        return letters.map((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            return span;
        });
    };

    // Append split words and letters to container
    const bodyElements = splitWords(phrase);
    bodyElements.forEach((element) => {
        container.appendChild(element);
    });

    // Create animation
    gsap.to(container.children, {
        scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "15% center",
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1,
    });
});