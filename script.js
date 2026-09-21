const yesButton =
    document.getElementById("yes-button");

const noButton =
    document.getElementById("no-button");

const questionScreen =
    document.getElementById("question-screen");

const dateScreen =
    document.getElementById("date-screen");


/* --------------------------------
   YES
-------------------------------- */

yesButton.addEventListener("click", () => {

    questionScreen.classList.add("hidden");

    dateScreen.classList.remove("hidden");

});


/* --------------------------------
   RUNAWAY NO BUTTON
-------------------------------- */

function moveNoButton() {

    const padding = 20;

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;


    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );


    noButton.style.position = "fixed";

    noButton.style.zIndex = "100";

    noButton.style.left =
        `${randomX}px`;

    noButton.style.top =
        `${randomY}px`;
}


/* Computer */

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Phone */

noButton.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);
