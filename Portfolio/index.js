let nav = document.getElementById("nav");
let counter = 0;

const threeTimes = () => {
    counter++;
    if (counter === 3) {
        nav.style.backgroundColor = "red";
    }

    if (counter === 5) {
        nav.style.backgroundColor = "";
    }
}

nav.addEventListener("click", threeTimes);